import React from 'react';

const PoemContainer = ({seconds}) => {

  return (

    <div className='flex text-black w-auto align-middle justify-center text-3xl pt-5 pb-5 font-bold' id="poem" suppressHydrationWarning>{seconds}</div>

  )
}

export default PoemContainer