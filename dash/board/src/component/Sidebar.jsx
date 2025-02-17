import React from 'react'
import '../Styles/Sidebar.css'
import { FcShop } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { TbShoppingCartFilled } from "react-icons/tb";
import { TbBrandWish } from "react-icons/tb";
import { MdOutlineSnowboarding } from "react-icons/md";
import { RiPagesFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
const Sidebar =()=>{
    return(
        <div className='container'>
            <ul className='sidebar'>
                <div className='shop'><FcShop />BOTIGA SHOP</div>
                <div className='dash'><MdDashboard />Dashboard</div>
                <div className='pro'><FaProductHunt /> Products</div>
                <div className='box'><FaPeopleCarryBox />Track Order</div>
                <div className='shopping'><TbShoppingCartFilled />Shopping Cart</div>
                <div className='wish'><TbBrandWish />Wistlist</div>
                <div className='trending'><MdOutlineSnowboarding />Trending now</div>
                <div className='page'><RiPagesFill />Pages</div>
                <div className='user'><FaUsers />Users</div>


            </ul>
        </div>
    )
}
export default Sidebar