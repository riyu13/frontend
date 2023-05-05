import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6" style={{minHeight: "100vh"}}>
            <div className="column is-2" style={{backgroundColor: '#B0E0E6'}} >
                <Sidebar/>
            </div>
            <div className="column" style={{backgroundColor: '#FFFFFF'}}>
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout