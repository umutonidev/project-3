import React from 'react'
import { TfiSearch } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import'../Styles/Navbar.css'
const Navbar =()=>{
    return(
        <div className='nav'>
            <p className='big'> BOTIGA DASHBOARD</p>
            <div className='search'><TfiSearch /></div>
            <div className='prof'><CgProfile />profile</div>

        
        </div>
    )
}
export default Navbar