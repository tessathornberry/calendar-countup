import React from 'react';

const PoemContainer = () => {

  return (
    // <div className='w-1/2'>PoemContainer</div>
    <div className='w-1/2' id="poem">{new Date().getSeconds()}</div>

  )
}

export default PoemContainer