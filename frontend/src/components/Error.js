import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div className='errorpage'>
      <h1 >Not Found</h1>
      <h3>We are sorry,Page not found </h3>
      <Link to={'/'}><button>Go To Home Page</button></Link>
    </div>
  )
}

export default Error
