import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Cartitem from '../components/Cartitem'
const Cart = () => {
  // jo current state hai usi ko retunr kar do
  const { cart } = useSelector((state) => state)

  const[totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0)); // reduce used for find sum without loop
  },[cart])
  // jab bhi cart me khuch change hohgga tab h i totalAMount change karega
  return (
    <div>


      {
        cart.length > 0 ?
          (<div>
            <div>
              {
                cart.map((item, index)=>{
                  return <Cartitem key={item.id} item={item} itemIndex={index}/>
                })
              }
             </div>





             <div>

              <div>
                 <div>Your cart</div>
                 <div>Summary</div>
                 <p>Total items: {cart.length}</p>
              </div>



              <div>
                   <p>Total Amount:{totalAmount}</p>
                   <button>
                    CheckOut
                   </button>
              </div>


             </div>








            
          </div>) :
          (<div>
            <h1>Cart Empty</h1>
            <Link to={'/'}
            ><button> Shop Now</button> </Link >
          </div >
          )
      }

    </div >
  )
}

export default Cart