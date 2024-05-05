import React from 'react'
import {FaRunning} from "react-icons/fa"

const PlaysNumber = ({plays}) => {
  return (
    <div className='flex items-center gap-1'>
        <FaRunning className='h-4 w-4 text-gray-300' />
        {plays}
    </div>
  )
}

export default PlaysNumber