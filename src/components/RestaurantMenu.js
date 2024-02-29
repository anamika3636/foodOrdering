import { useEffect, useState } from "react"
import { Menu_api } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategorie from "./RestaurantCategorie";
import showItems from "./RestaurantCategorie"
const RestaurantMenu =()=>{
    const [resInfo,setresInfo]=useState(null)
    const {resId} = useParams();
    const dummy="dummydata";
    useEffect(()=>{
      fetchMenu();
    },[])
    const fetchMenu =async()=>{
        
        const data = await fetch
        (Menu_api+"&restaurantId="+resId.toString().trim())
        ;
        const json = await data.json();
        setresInfo(json.data);
        console.log(json.data,"menu data")
        
        return resInfo;
    };
    if (resInfo === null) return <Shimmer/>
    // resInfo === null?(<Shimmer/>):
    const { name,costForTwoMessage, cuisines }=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    
    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories,"categories")
    return   (
        <div className="text-center">
        <h1 className="font-bold m-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
            {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category)=>(
            <RestaurantCategorie 
            key={category?.card?.card?.title}
            data={category?.card?.card
            }
            showItems={false} dummy={dummy}
            />
        ))}
        </div>
    );
};
export default RestaurantMenu;