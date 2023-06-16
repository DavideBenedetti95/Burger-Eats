import { motion } from "framer-motion";
import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiFillTag} from "react-icons/ai"
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaWallet,FaUserFriends} from 'react-icons/fa'
import {MdFavorite,MdHelp} from 'react-icons/md'

const Navbar = () => {

    const [delivery, setDelivery] = useState(true);

    const deliveryHandler = () => {
        setDelivery(true)
    }

    const pickupHandler = () => {
        setDelivery(false)
    }

    const [navbar, setNavbar] = useState(false);

    const ActiveNavbarHandler = () => {
        setNavbar(true)
    }

    const DisableNavbarHandler = () => {
        setNavbar(false)
    }

    return (
        <div className="w-full mx-auto flex items-center justify-between p-5">
            {/* Left Side */}
            <div className="flex items-center">
                <div onClick={ActiveNavbarHandler}>
                    <AiOutlineMenu className="cursor-pointer" size={30}></AiOutlineMenu>
                </div> 
                <h1 className="text-2xl md:text-3xl font-bold px-2 mb-1">
                    Burger <span className="font-bold text-orange-500">Eats</span>
                </h1>
                {/* Right Side */}
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-2 text-[14px]">
                    <p className={delivery ? "bg-black text-white rounded-full p-2 cursor-pointer font-semibold transition-all duration-500" : "bg-transparent text-black rounded-full p-2 cursor-pointer" } onClick={deliveryHandler}>Delivery</p>
                    <p className={!delivery ? "bg-orange-500 text-black rounded-full p-2 cursor-pointer font-semibold transition-all duration-500" : "bg-transparent text-black rounded-full p-2 cursor-pointer"} onClick={pickupHandler}>Pickup</p>
                </div>
            </div>

            {/* SearchBar */}
            <div className="bg-gray-200 rounded-full flex items-center py-1 lg:w-[500px] mr-1">
                <AiOutlineSearch size={25} className="ml-2"/>
                <input className="bg-transparent pl-2 py-2 focus:outline-none w-[130px]" type="text" placeholder="Search Burger..." />
            </div>
            {/* Cart */}
            <button className="bg-black text-orange-500 hidden md:flex items-center py-2 rounded-full">
                <BsFillCartFill size={20} className="mr-2"/> Cart
            </button>

            {/* Overlay Effect */}
            <div className={navbar ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : ""}>
                {/* SideDrawerMenu */}
                <div className={navbar ? "fixed top-0 left-0 w-[300px] h-screen bg-black text-orange-500 z-10 duration-500": "fixed top-0 left-[-100%] duration-500"}>
                    <AiOutlineClose size={25} className="absolute right-4 top-4 cursor-pointer" onClick={DisableNavbarHandler}/>
                    <h2 className="text-2xl p-4 text-white font-semibold">Burger <span className="font-bold text-orange-500">Eats</span></h2>
                    <nav>
                        <ul className="flex flex-col p-4 text-orange-500">
                            <li className="text-xl py-4 flex cursor-pointer"><TbTruckDelivery size={25} className="mx-4 mt-[2px]"/>Orders</li>
                            <li className="text-xl py-4 flex cursor-pointer"><MdFavorite size={25} className="mx-4 mt-[2px]"/>Favorites</li>
                            <li className="text-xl py-4 flex cursor-pointer"><FaWallet size={25} className="mx-4 mt-[2px]"/>Wallet</li>
                            <li className="text-xl py-4 flex cursor-pointer"><AiFillTag size={25} className="mx-4 mt-[2px]"/>Help</li>
                            <li className="text-xl py-4 flex cursor-pointer"><BsFillSaveFill size={25} className="mx-4 mt-[2px]"/>Promotions</li>
                            <li className="text-xl py-4 flex cursor-pointer"><MdHelp size={25} className="mx-4 mt-[2px]"/>Best One</li>
                            <li className="text-xl py-4 flex cursor-pointer"><FaUserFriends size={25} className="mx-4 mt-[2px]"/>Invite Friend</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;