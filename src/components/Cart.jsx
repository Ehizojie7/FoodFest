import { useContext} from "react";
import { ShopContext } from "./ShopContext";
import { data } from "./data.js";  
import { useNavigate } from "react-router-dom";



const Cart = () =>{

const {addToCart, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);
const totalAmount = getTotalCartAmount()
const navigate = useNavigate()

return(
<div className="cart">
    <div>
    <h1>Your Cart Items</h1>
    </div>

    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {data.map((item) =>{
            if(cartItems[item.id] !== 0){
        return(
          <div
            key={item.id}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
             <div className="count-handler">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <input value={cartItems[item.id]} />
                <button onClick={() => addToCart(item.id)}>+</button>
             </div>
            </div>
          </div>
    )}})}

            { totalAmount > 0 ?
         <div className="checkout">
            <p> subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Check Out</button>
        </div>
        : <h1>Your Cart Is Empty!</h1> }

           
      </div>

</div>
    )};

    export default Cart;