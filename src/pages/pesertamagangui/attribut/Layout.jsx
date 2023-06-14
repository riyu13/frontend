import React, { useState } from "react";
import Navbar2 from "./Navbar";
import Sidebar2 from "./Sidebar";

const Layout = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <React.Fragment>
          <Navbar2 toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <div className="columns mt-6" style={{ minHeight: "100vh", backgroundColor: '#B0E0E6' }}>
                {isSidebarOpen && (
                <div className="column is-2">
                    <Sidebar2 />
                </div>
                )}
                <div className="column" style={{ backgroundColor: '#FFFFFF' }}>
                <main>{children}</main>
                </div>
            </div>
      </React.Fragment>
    )
  }
  
  export default Layout