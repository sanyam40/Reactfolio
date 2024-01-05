import { useSelector,useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = () => {

  const data=useSelector((state)=>state.cart.cartItems);
  const dispatch=useDispatch();


  return (
    <div>
      {
        data.map((item)=>{
          return(
            <div key={item.id}>
              <h1>{item.title}</h1>
              <h1>{item.price}</h1>
              <h1>{item.quantity}</h1>
              <img src={item.image} alt="" />
              <button onClick={()=>{dispatch(remove(item))}}>Remove from Cart</button>
            </div>
          )
        })
      }
      
    </div>
  );
};

export default CartItem;
