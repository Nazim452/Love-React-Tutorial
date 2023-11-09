import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';
const API_KEY ='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';

const Random = () => {

  // const [gif, setgif] = useState('');
  // const[loading , setloading] = useState(false);
  
  // function clickHander() {
  //   fetchData();
  // }
  
  // async function fetchData(){
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  //   const {data} = await axios.get(url);
  //   const imagesSource = data.data.images.downsized_large.url;
  //   console.log(imagesSource);

  //   console.log(imagesSource);
  //   setgif(imagesSource)
  //   setloading(false);
    
  // }

 


  // useEffect(()=>{
  //   fetchData();
  // },[])


  // instead of using upper commented code use onlythis hooks

  const{gif, loading,fetchData} = Usegif();

  function clickHandler(){
    fetchData();
  }
  return (


    <div className=' bg-green-400 w-1/2 mt-30 rounded-lg border border-black flex flex-col items-center gap-y-5 mb-[40px]'>


      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>

      {/* if loading true then show spinner otherwise show false */}
      {
        loading?(<Spinner/>):(<img src={gif}  />)
      }
      
      


      <button
        className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'
        onClick={clickHandler}
      >Generate</button>

    </div>
  )
}

export default Random
