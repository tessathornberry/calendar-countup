import React from 'react';

const PoemContainer = ({seconds}) => {

  return (
    // <div className='w-1/2'>PoemContainer</div>
    <div className='flex w-auto align-middle justify-center text-xl pt-5' id="poem">{seconds}</div>

  )
}

export default PoemContainer