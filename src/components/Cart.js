import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import { incrementQuantity, decrementQuantity, removeItem,clearCart} from '../components/redux/cartSlice'
import {  MDBIcon } from 'mdbreact';

const Cart=()=> {
  const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
   

    const getTotal = () => {
      let totalQuantity = 0
      let totalPrice = 0
      cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
      })
      return {totalPrice, totalQuantity}
    }
    
    if (cart.length === 0) {
      return (
        <>
          <h3 className="fs-bold" style={{ marginTop: "20px" }}>
            Your Shopping{" "}
            <span>
              <MDBIcon fas icon="shopping-bag" />
            </span>{" "}
            is Empty
          </h3>
         
        </>
      );
    }

   
  return (
    
    <div>
    <h1>Cart</h1>
  
      <div className="cartWrapper">
                {cart.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.image} alt="" />
                        <h5>{product.title}</h5>
                        <h5>{product.price}</h5>
                        <button
                          className='btn' 
                          onClick={() => dispatch(removeItem(product.id))}>
                            Remove
                        </button>

                        <div className='cartItem__incrDec'>
                          <button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                          <p>{product.quantity}</p>
                          <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                        </div>

                      
                    </div>
                    
                ))}
                <>
                
                <button className="btn">
                        Continue Checkout
                    </button>
            
                  
                  
                </>
                <button  className="btn"   onClick={() => dispatch(clearCart())}>
         
                        Clear Cart
                    </button>
   
                <p className="total__p">
                          total ({getTotal().totalQuantity} items) 
                          : <strong>${getTotal().totalPrice}</strong>
                        </p>
                        
            </div>
           
    </div>
    
  )
}

export default Cart