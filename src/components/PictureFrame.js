import Image from 'next/image'
import React from 'react'
import lightbulb from '../../public/lightbulb.png'

const PictureFrame = () => {
  return (
    <div className='h-96'>
      <Image src={lightbulb}
                alt="lightbulb"
                className="h-full w-auto "
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
    </div>
  )
}

export default PictureFrame