import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';
const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const Tag = () => {
  const [tag, setTag] = useState('');

  // const [gif, setgif] = useState('');
  // const [loading, setloading] = useState(false);

  // async function fetchData() {
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const { data } = await axios.get(url);
  //   const imagesSource = data.data.images.downsized_large.url;
  //   console.log(imagesSource);

  //   console.log(imagesSource);
  //   setgif(imagesSource)
  //   setloading(false);

  // }

  // useEffect(()=>{
  //   fetchData();
  // },[])

  const { gif, loading, fetchData } = Usegif(tag);//  tag  passing in gif tab pata chalega kis tag ko ham khojna chahte hai

  function clickHandler() {
    fetchData(tag);
  }


  function changeHandler(event) {
    setTag(event.target.value)

  }


  return (


    <div className=' bg-blue-400 w-1/2 mt-30 rounded-lg border border-black flex flex-col items-center gap-y-5'>


      <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} Gif</h1>

      {/* if loading true then show spinner otherwise show false */}
      {
        loading ? (<Spinner />) : (<img src={gif} />)
      }


      <input
        className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
        type="text" />




      <button
        className='w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]'
        onClick={clickHandler}
      >Generate</button>

    </div>
  )
}

export default Tag

