import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { remove,add } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
const Product = ({singlepost}) => {
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    const addtocart=()=>{
        dispatch(add(singlepost));
        toast.success("item added to cart")
    }
    const removefromcart=()=>{
        dispatch(remove(singlepost.id));
        toast.success("item removed from cart");
    }
  return (
    <div className='flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow shadow-gray-500  '>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{singlepost.title}</p>
      </div>

      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{singlepost.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={singlepost.image} alt="" className='h-full w-full' />
      </div>

      <div className='flex justify-between gap-11 items-center w-full mt-5'>
         <div>
        <p className='text-green-600 font-semibold'>${singlepost.price}</p>
      </div>

      {
        cart.some((p)=>p.id==singlepost.id)?(<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={removefromcart}>Remove Item</button>):(<button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in ' onClick={addtocart}>Add to cart</button>)
      }
      </div>

     
    </div>
  )
}

export default Product
