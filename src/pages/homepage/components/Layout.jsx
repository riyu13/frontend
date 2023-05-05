import React from 'react'
import Navbar from './Navbar'
import Main from './Main'


const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <Main/>
    </React.Fragment>
  )
}

export default Layout