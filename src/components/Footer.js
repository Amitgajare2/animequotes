import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {

  const date = new Date().getFullYear()

  return (
    <>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/description'>Description</Link>
        <Link to='/anime'>Anime list</Link>
        <Link to='/request'>Request</Link>
      </div>

      <div className="footer-credit">
      <p>© 2023 - {date} Amit Gajare - All Rights Reserved. </p>
      </div>
    </>
  )
}

export default Footer;