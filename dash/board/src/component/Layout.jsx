import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import{Outlet} from 'react-router-dom'


const Layout =()=>{
    return(
        <div>
        <Navbar/>
        <Sidebar/>
        <Outlet/>
        </div>
    )
}
export default Layout