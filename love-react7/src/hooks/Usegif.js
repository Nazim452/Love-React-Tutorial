import axios from 'axios';
import  { useEffect, useState } from 'react'

// Custom HOoks - Remove Code duplicity



const API_KEY ='kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';

const Usegif = (tag) => {
    
  const [gif, setgif] = useState('');
  
  const [loading, setloading] = useState(false);

  const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

  function clickHander() {
    fetchData();
  }

  async function fetchData(tag) {
    setloading(true);
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const { data } = await axios.get(tag? tagurl:randomurl);
    const imagesSource = data.data.images.downsized_large.url;
    console.log(imagesSource);

    console.log(imagesSource);
    setgif(imagesSource)
    setloading(false);

  }

  useEffect(() => {
    fetchData('car');
  }, [])




// jisko hame random.js ke andar ya tag ke under use karna hai use return karna parega


 return {gif, loading, fetchData};


 
}

export default Usegif