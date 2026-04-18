import React from 'react'
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import {useDispatch} from 'react-redux'
import { remove } from '../redux/slices/cartSlice';

const Cartitem = ({item,itemIndex}) => {
    const dispatch=useDispatch();
    const removefromcart=()=>{
        dispatch(remove(item.id));
        toast.success("item removied")
    }
  return (
    <div className='border-b pb-[1rem] mt-[1rem] '>
      <div className='flex gap-1'>
        
            <img src={item.image} alt="" className='h-[15rem]' />
       
        <div className='w-[20rem] flex flex-col justify-evenly'>
            <h1 className='text-gray-700 font-semibold text-lg text-left  mt-1'>{item.title}</h1>
            <p>{item.description.split(" ").slice(0,20).join(" ")+"..."}</p>
            <div className='flex w-full justify-between items-center'>
                <p className='text-[2rem] text-green-600 font-semibold'>
                    ${item.price}
                </p>
                <div onClick={removefromcart}>
                    <MdDelete className='bg-red-200 text-[2rem] text-red-600 p-[0.2rem] rounded-full'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
