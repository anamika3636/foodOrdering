import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const Cart = ()=>{
    const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="text-center m-2 p-10">
            <div className="text-2xl font-bold"> cart</div>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;