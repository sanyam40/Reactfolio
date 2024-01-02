import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGig from "../hook/useGig";

export default function Random() {
  
  const{gif, loading, fetchGif}=useGig();

  async function clickHandler() {
    await fetchGif();
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>

      {
        loading ? <Spinner/> : <img src={gif} width="450"/>
      }
      
      <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">Generate</button>
    </div>
  );
}
