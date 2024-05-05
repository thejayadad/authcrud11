import React from 'react'

const Site = () => {
  return (
    <section>
        <div className='flex items-center flex-col space-y-2 justify-center'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold'>
                Stat Tracker
            </h1>
            <p className='leading-relaxed text-grey-300 font-extralight tracking-tight'>
                The home of little league stat tracker
            </p>
        </div>
    </section>
  )
}

export default Site