import React, { useRef, useState, useEffect} from 'react'
import PictureFrame from './PictureFrame'
import PoemContainer from './PoemContainer'

const CalendarContainer = () => {
  const Ref = useRef(null);
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  function refreshSeconds() {
    setSeconds(new Date().getSeconds());
  }

  useEffect(() => {
    const timerId = setInterval(refreshSeconds, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  //the w-1/2 makes this flexible to an extent
  return (
    <div
    className='w-4/5 flex-col items-center min-w-min border-solid border-4 rounded-xl border-black p-4 bg-white'>

      <h2 className='flex border-b-2 border-black w-auto justify-center sm:hidden '>Crow Seconds</h2>
      <h2 className='w-auto justify-center hidden sm:flex'>Crow </h2>
      <h2 className='border-b-2 border-black w-auto justify-center hidden sm:flex pb-2'>Seconds </h2>
      <div className='flex-col items-center justify-center'>
        <PoemContainer seconds={seconds} />
        <PictureFrame seconds={seconds} />
      </div>



    </div>
  )
}

export default CalendarContainer