import React from 'react'

const HeadingText = ({title, description}) => {
  return (
    <div className='flex flex-col'>
        <h1 className='title-font font-medium sm:text-xl md:text-2xl xl:text-3xl text-gray-900'>{title}</h1>
        <p className='leading-relaxed text-grey-300 font-extralight tracking-tight'>{description}</p>
    </div>
  )
}

export default HeadingText