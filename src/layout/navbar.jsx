import React from 'react';
import { MdAdminPanelSettings } from "react-icons/md";
import { BsShopWindow } from "react-icons/bs";





export const Navbar = () => {
    return (
        <nav className='flex  navbg w-full h-[100px] border-b-[4px] gap-[300px] justify-center items-center'>
            <div className='text-2xl font-thin'>LionShop</div>
            <div className='flex pl-[150px] font-sans gap-[100px]'>
                <div className=' hover:border-b-2'>Home</div>
                <div className=' hover:border-b-2'>Shop</div>
                <div className=' hover:border-b-2'>Our Store</div>
            </div>
            <div className='flex text-xl relative gap-10 justify-center items-center'>
            <div className='text-[#d1ae7f]'><BsShopWindow size={25}/></div>
            <div className='rounded-full h-[45px] w-[45px] bg-profile bg-cover bg-center'></div>
            <div className='text-small text-[#d1ae7f] translate-x-[-250%] translate-y-[-30%]'><MdAdminPanelSettings /> </div>

            </div>
            
        </nav>
    );
};

