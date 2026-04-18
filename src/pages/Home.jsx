import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';

const Home = () => {
     const API_URL = "https://fakestoreapi.com/products";
     const [loading,setloading]=useState(false);
     const [post,setpost]=useState([]);

     async function fetchProductData(){
        setloading(true);
        try{
          const response=await fetch(API_URL);
          const data=await response.json();
          console.log(data);
          setpost(data);
        }
        catch(err){
            console.log("error aa raha hai");
             setpost([]);

        }
        setloading(false);
     }


     useEffect(()=>{
        fetchProductData();
     },[]);
  return (
    <div>
      {loading?(<Loader></Loader>):
      post.length>0?(<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-l p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>{
         post.map((singlepost)=>{
            return <Product key={singlepost.id} singlepost={singlepost}></Product>
        })
        }
       
      </div> ):(<div className='flex justify-center items-center'>No post found</div>)
       
      }
    </div>
  )
}

export default Home
