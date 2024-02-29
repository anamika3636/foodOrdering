 import { useDispatch } from "react-redux";
import { Con_url } from "../utils/constant";
import { addItems } from "../utils/cartSlice";   
 const ItemList = ({items,dummy}) => {
  
  const dispatch = useDispatch();
  const handleAddItem =(item)=>{
    //dispatch and item
    dispatch(addItems(item));

  };

  return (
    <div>
      {items.map((item) => (
        <div 
        key={item.card.info.id}
         className="p-2 m-2  border-gray-200 border-b-2 text-left">
        <div className="py-2">

           <img src={Con_url + item.card.info.imageId } className="w-14"></img>
            <span>{item.card.info.name}</span>
            <span>-Rs {item.card.info.price/100}</span>
            </div>
              <p className="text-xs">
             {item.card.info.description}
             </p> 
             <button className="p-2 bg-gray  shadow-lg m-auto"
             onClick={()=>handleAddItem(item)}
             >add</button>
        </div>
      ))}
    </div>
  );   
};
export default ItemList;
