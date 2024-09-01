import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { TbPointerMinus } from "react-icons/tb";


export const Footer = () => {
    return (
        <div className='h-[35vh] bg-[#d2ae7f] flex mt-1 '>
            <div className='h-[100%] text-white w-[49.8%] gap-5 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-serif'>Get In Touch</h1>
                <p className='text-[] work text-gray-100'>Discover the latest trends and timeless classics at our clothing store. <br /> From chic casuals to elegant eveningwear</p>
                <div className='text-2xl flex gap-4 ' >
                    <div className='bg-amber-900 p-1.5 rounded text-white'>< FaInstagram /></div > <div className='bg-amber-900 p-1.5 rounded text-white'><FaFacebook /></div> <div className='bg-amber-900 p-1.5 rounded text-white'><FaTwitter /></div> <div className='bg-amber-900 p-1.5 rounded text-white'><FaPinterest /></div></div>
            </div>
            <div className='w-[0.3%] bg-white h-[100%]'></div>
            <div className='h-[100%] w-[49.8%] flex gap-16 justify-center items-center'>
                <div>
                    <div className='h-[25vh] w-[15vw] rounded-[20px] relative    bg-amber-900  z-30 flex justify-center items-center flex-col'>
                        <div className='text-5xl text-[#fee5b5] hover:'><TbPointerMinus /></div>
                        <div className='text-[#fee5b5]'>See More About Us</div>
                    </div>
                    <div className='h-[25vh] w-[15vw] absolute  translate-y-[-200px] right-[25%] rounded-[20px] footerbg '></div>
                </div>
                <div>
                    <div className='h-[25vh] w-[15vw] rounded-[20px]  relative z-30 bg-amber-900 flex justify-center items-center flex-col gap-y-3'>
                        <div className='text-5xl text-[#fee5b5]'><MdMarkEmailRead /></div>
                        <div className='text-[#fee5b5]'>LionShop-Contact.com</div>
                    </div>
                    <div className='h-[25vh] w-[15vw] absolute translate-y-[-200px] mb-[1000px]  right-[5%] rounded-[20px] footerbg'></div>

                </div>

            </div>


        </div>
    );
};
