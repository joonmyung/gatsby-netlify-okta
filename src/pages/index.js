import { Link } from 'gatsby'
import React from 'react'

export default () => {
  return (
    <>
      Hello world!
      <p><Link to="/blog">View Blog</Link></p>
      <p><Link to="/account">My Account</Link></p>
    </>)
}