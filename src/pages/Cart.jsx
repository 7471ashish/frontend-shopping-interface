import React from 'react'
import Cartitem from '../components/Cartitem';
import { useState } from 'react';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const [totalAmount,settotalAmount]=useState(0);


    useEffect(()=>{
         settotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
    },[cart])
  return (
    <div className='flex justify-center items-center'>
      {
        cart.length>0?(<div className='flex flex-col lg:flex-row gap-[4rem] '>
            <div>
                {
                    cart.map((item,index)=>{
                        return <Cartitem key={item.id} item={item} itemIndex={index}></Cartitem>
                    })
                }
            </div>

            <div className='flex flex-col justify-between w-[20rem] sticky top-0 lg:h-screen py-[7rem]'>

                <div>
                    <div className='text-green-500 text-[1rem] font-bold'>Your Cart</div>
                    <div className='text-green-500 text-[2rem] font-bold'>Summary</div>
                    <p className='text-gray-500 font-bold'>Totol items:<span>{cart.length}</span></p>
                </div>


                <div>
                    <p className='text-green-500 text-[1rem] font-bold'>Total amount: <span className='font-bold text-gray-600'>${totalAmount}</span></p>
                    <button className='bg-green-500 font-bold text-white py-[0.5rem] w-full rounded-md'>Check out now</button>

                </div>
            </div>



        </div>):(<div className='flex flex-col justify-center items-center h-full w-full'>
            <h1 className='text-green-500 font-bold text-[2rem]'>Cart is empty</h1>
            <Link to="/">
            <button className='bg-green-500 text-white px-[1rem] py-[0.5rem] rounded-sm font-bold'>Shop now</button>
            </Link>
            </div>)
      }
    </div>
  )
}

export default Cart
