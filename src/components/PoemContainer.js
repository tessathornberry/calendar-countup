import React from 'react';

const PoemContainer = ({seconds}) => {

  return (
    // <div className='w-1/2'>PoemContainer</div>
    <div className='flex w-auto align-middle justify-center text-3xl pt-5 font-bold' id="poem">{seconds}</div>

  )
}

export default PoemContainer