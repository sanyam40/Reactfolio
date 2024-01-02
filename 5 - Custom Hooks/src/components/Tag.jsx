import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGig from "../hook/useGig";

export default function Tag() {
  const [tag, setTag] = useState("");
  const{gif, loading, fetchGif}=useGig(tag);

  
  function chngeHandler(e) {
    setTag(e.target.value);
  }
  
  async function clickHandler() {
    await fetchGif();
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

      {
        loading ? <Spinner/> : <img src={gif} width="450"/>
      }

      <input type="text" className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]" placeholder="Enter here" onChange={chngeHandler} value={tag}/>
      
      <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  );
}
