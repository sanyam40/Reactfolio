import React, { useState } from 'react';

function Card({id,image,info,price,name,removeTour}){

    const [readMore,setReadMore] = useState(false);
    const description = readMore ? info:`${info.substring(0,200)}....`;

    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return (
        <>
        <div className='card'>
            <img src={image} alt="" className='image' />
            <div className="tour-detils">
                <h4 className="tour-price">{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                <p>{description}</p>
                <span className='read-more' onClick={readMoreHandler}>
                    {readMore ? 'show less' : 'read more'}
                </span>
            </div>
        <button className='btn-red'onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
        </>
    );

}

export default Card;