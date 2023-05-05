import React from "react";
import Navbar2 from "./Navbar";
import Sidebar2 from "./Sidebar";

const Layout = ({children}) => {
    return (
      <React.Fragment>
          <Navbar2/>
          <div className="columns mt-6" style={{minHeight: "100vh", backgroundColor: '#B0E0E6'}} >
              <div className="column is-2">
                  <Sidebar2/>
              </div>
              <div className="column" style={{backgroundColor: 'white'}} >
                  <main>{children}</main>
              </div>
          </div>
      </React.Fragment>
    )
  }
  
  export default Layout