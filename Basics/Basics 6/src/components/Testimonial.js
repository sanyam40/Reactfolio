import React from 'react'
import Card from './Card'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'

export default function Testimonial(props) {
  const [index,setIndex]=React.useState(0);
  let review=props.reviews;
  const [data,setData]=React.useState(review[index]);

  function leftHandler(){
    if(index===0){
      setIndex(review.length-1);
      setData(review[review.length-1]);
    }else{
      setIndex(index-1);
      setData(review[index-1]);
    }
  }

  function rightHandler(){
    if(index===review.length-1){
      setIndex(0);
      setData(review[0]);
    }else{
      setIndex(index+1);
      setData(review[index+1]);
    }
  }

  function surpriseHandler(){
    let random=Math.floor(Math.random()*review.length);
    setIndex(random);
    setData(review[random]);
  }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700'>
      <Card reviews={data}/>
      <div className='flex text-exl mt-5 gap-3 text-violet font-bold mx-auto'>
        <button className='curson-pointer hover:text-violet-500' onClick={leftHandler}><FiChevronLeft/></button>
        <button className='curson-pointer hover:text-violet-500' onClick={rightHandler}><FiChevronRight/></button>
      </div>
      <div>
        <button onClick={surpriseHandler}className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
      </div>
    </div>
  )
}
