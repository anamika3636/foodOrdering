import { useEffect, useState } from "react"
import { Menu_api } from "./constant";

const useResmenu=(resID)=>{
    const [resInfo,setResinfo]=useState(null);
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const data = await fetch(Menu_api+resID)
        const json1 = await data.json;
        setResinfo(json1.data);
    }
    return resInfo;
}
export default useResmenu;