import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { FaMapLocationDot} from 'react-icons/fa6';
import {FaFacebook,FaInstagram,FaLinkedin } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const FooterLinks =[
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#Blog"
    },
];

const Footer = () => {
  return (
    <div className="text-white bg-[#212529]">
        <div className="container">
            <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                <div className="py-8 px-4">
                    <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
                        <FiShoppingBag size="30"/>
                            ShopMe
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia repudiandae expedita provident placeat voluptas vitae</p>
                </div>
                <div>
                    <div className="py-8 px-4">
                        <h1 className="sm:text-xl  text-xl font-bold sm:text-left text-justify mb-3">Importants Links</h1>
                        <ul className="flex flex-col gap-3">
                            {FooterLinks.map((link)=>( 
                                <li className="cursor-pointer hover:text-primary hover:translate-x-l duration-300 text-gray-200" key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div >
                    <div className="py-8 px-4">
                    <h1 className="sm:text-xl  text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                    <ul className="flex flex-col gap-3">
                            {FooterLinks.map((link)=>( 
                                <li className="cursor-pointer hover:text-primary hover:translate-x-l duration-300 text-gray-200" key={link.title}>{link.title}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#"><FaInstagram className="text-3xl"/> </a>
                        <a href="#"> <FaFacebook className="text-3xl"/></a>
                        <a href="#"><FaLinkedin className="text-3xl"/> </a>
                    </div>
                    <div className="mt-6 ">
                        <div className="flex items-center gap-3">
                            <FaMapLocationDot/>
                            <p>Karachi, Lahore, Islamabad</p>
                        </div>
                        <div className="flex  items-center gap-3 mt-3">
                            <IoCall/>
                            <p>0331-0255200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer