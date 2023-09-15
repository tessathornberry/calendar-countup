import Image from 'next/image'
import React from 'react'
import lightbulb from '../../public/lightbulb.png'
import noCrows from '../../public/0crows.png'
import { supplyPhoto } from '@/scripts/tools'

const PictureFrame = ({seconds}) => {
  if (seconds === 0) {
    seconds = "00";
  } else if (seconds < 10) {
    seconds = `0${seconds}`
  } else {
    seconds += "";
  }

  return (
    <div className='flex w-full h-auto p-4 max-w-s justify-center'>
      <Image src={supplyPhoto(seconds[0])}
                alt="number of seconds in crows: ones"
                className="flex h-full w-1/3 mr-2 border-4 border-black sm:rounded-xl rounded-2xl"
                priority
              />
              <Image src={supplyPhoto(seconds[1])}
              alt="number of seconds in crows: ones"
              className="flex h-full w-1/3 ml-2 border-4 border-black sm:rounded-xl rounded-2xl"
              priority
            />
    </div>
  )
}

export default PictureFrame