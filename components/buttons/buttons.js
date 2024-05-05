'use client'
import Link from 'next/link'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const CreateButton = () => {
  return (
    <Link
    className='flex items-center rounded-lg justify-end' 
    href={'/new'}>
        <FiPlus /> Add Player
    </Link>
  )
}



export default CreateButton