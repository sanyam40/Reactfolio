import React from 'react'

export default function Filter({filterData,category,setCategory}) {
  const filterHandler=(title)=>{
    setCategory(title);
  }
  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {filterData.map((data)=>{
        return (<button onClick={()=>filterHandler(data.title)} key={data.title}>{data.title}</button>)
      })}
    </div>
  )
}
