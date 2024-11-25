import React from 'react'
import { nanoid } from 'nanoid';
import { BiSolidStar, BiStar } from 'react-icons/bi';

const Star = ({val, style}) => {
    return (
        <div style={style} className=' flex text-gray-400 text-sm'>
            {Array.from({ length: val }).map((_,) => <BiSolidStar key={nanoid()} className=' text-yellow-300'/>)}
            {Array.from({ length: 5-val }).map((_,) => <BiStar key={nanoid()}/>)}
        </div>
    )
}

export default Star