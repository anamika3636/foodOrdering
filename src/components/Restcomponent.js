import { Con_url } from "../utils/constant";

const Restcomponent=({resData})=>{
    // const {resData} = props;
    const {name,cuisines,avgRating,cloudinaryImageId,veg,costForTwo} = resData?.info;
            return(

        <div className="m-4 p-4 w-[200px] rounded-lg" style={{background:"#f0f0f0"}}>
            <img  
            className="rounded-lg"
            src={Con_url+cloudinaryImageId}/>

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h5 className="flex-wrap  " style={{display:"flex"}}>{cuisines.join(",")}</h5>
            <h4>Stars {avgRating}</h4>
            <h4 className="flex flex-wrap">{costForTwo}</h4>
            <h4>{veg}</h4>
        </div>
    );
};
export default Restcomponent;
