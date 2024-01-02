import React from 'react'
import {FcLike} from 'react-icons/fc'

export default function Card({course}) {
  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />
        <div>
            <button>
                <FcLike fontSize="1.75rem"/>
            </button>
        </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>
      </div>
    </div>
  )
}
