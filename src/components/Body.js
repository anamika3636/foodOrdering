import resList from "../utils/mockdata";
import Restcomponent from "./Restcomponent";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listres, setlistres] = useState([]); // if we need mock data then pass reslist in usestate array
  const [filterRes, setfilterRes] = useState([]); //data copy of listres
  const [searchlist, setsearchlist] = useState("");
  console.log(listres)

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setlistres(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json, "data");
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return (<h1>you are offline</h1>);
  const {loggedInUser,setUserName} = useContext(UserContext)


  if ( listres == undefined || listres.length === 0) {
    return (<Shimmer/>);
  }

  
  return (
    <div className="body">
      <div className="flex"> 
        <div className="search m-4 p-4">
        </div>
        <div className="m-4 p-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchlist}
            onChange={(e) => {
              setsearchlist(e.target.value);
            }}
          />
          

          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filter3 = listres.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchlist.toLowerCase());
              });
              console.log(filter3);
              setfilterRes(filter3);
            }}
          >
            Search
          </button>
        </div>
        <button
        className="px-4 py-2 bg-gray-400 m-10 rounded-lg"
          onClick={() => {
            const filteritem = listres.filter(
              (res) => res.info.avgRating > 4.5
            );
            console.log("avg");
            setfilterRes(filteritem); // why setfilter- we have 2 data place to update listres and filterres
            //  we take data from listres and update in filterres
          }}
        >
          top filter
        </button>

        <button
           className="px-4 py-2 bg-gray-400 m-10 rounded-lg" 
          onClick={() => {
            const filter2 = listres.filter((res2) => res2.info.avgRating < 4);
            console.log("avg2");
            setfilterRes(filter2);
          }}
        >
          less rated
        </button>
        <div className=" m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input 
        className="border border-black " type="text" 
          value={loggedInUser}
          onChange={(e)=>setUserName(e.target.value)}
        />
        </div>
      </div>``
    

      <div className="flex flex-wrap">
        {filterRes.map((restaurant) => (
          <Link to={"/restaurant/ "+ restaurant?.info.id  }>
          {/**/}
            <Restcomponent resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
