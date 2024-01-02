import { useState, useEffect } from 'react'
import axios from "axios";

export default function useGig(tag) {
    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState('false');
    
    const api=process.env.REACT_APP_GIPHY_API_KEY;
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${tag}`;
    const randomurl=`https://api.giphy.com/v1/gifs/random?api_key=${api}`;

    useEffect(()=>{
      fetchGif();
    },[])
    
    async function fetchGif(tag) {
      setLoading(true); 
      const {data}=await axios.get(tag ? url : randomurl);
      const imgsrc=data.data.images.downsized_large.url;
      setGif(imgsrc);
      setLoading(false);
    }

    return {gif, loading, fetchGif};
}
