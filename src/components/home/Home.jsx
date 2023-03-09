import React from 'react'
import './home.css'
import photo from '../Images/bg-pic.png'

export default function Home() {
  return (
    <div className='wrapper'>
      <img src={photo} alt='my-company' className='my-image'/>
    </div>
  )
}
