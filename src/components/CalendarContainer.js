import React, { useRef, useState} from 'react'
import PictureFrame from './PictureFrame'
import PoemContainer from './PoemContainer'

const CalendarContainer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState(new Date().getSeconds());


  //the w-1/2 makes this flexible to an extent
  return (
    <div
    className='flex-col items-center border-solid border-2 rounded border-black p-3 bg-white w-1/2'>

      <h2 className='border-b-2 border-black w-auto'>Calendar Countup</h2>
      <div className='flex items-center justify-between'>
        <PictureFrame />
        <PoemContainer />

      </div>



    </div>
  )
}

export default CalendarContainer