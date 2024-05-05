import Box from '@/components/box'
import NewPlayerForm from '@/components/forms/new-player-form'
import HeadingText from '@/components/heading-text'
import React from 'react'

const NewPage = () => {
  return (
    <section className='p-6'>
      <Box>
        <HeadingText
        title={'Add Player'}
        description={'Fill out the form below to add a player'}
        />
          <NewPlayerForm />
      </Box>
    </section>
  )
}

export default NewPage