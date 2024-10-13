import React from 'react'
import img1 from "../../assets/women.png";
import img2 from "../../assets/women2.jpg";
import img3 from "../../assets/women3.jpg";
import img4 from "../../assets/women4.jpg";
import { FaStar } from 'react-icons/fa6';
const Product = () => {

    const ProductData=[
        {
            id:1, 
            img: img1,
            title:"Women Ethnic",
            rating: 5.0,
            color: "white",
            aosDelay: "0",

        },
        {
            id:2, 
            img: img2,
            title:"Women Western",
            rating: 4.0,
            color: "Red",
            aosDelay: "200",

        },
        {
            id:3, 
            img: img3,
            title:"Women Ethnic",
            rating: 4.8,
            color: "Brown",
            aosDelay: "400",

        },
        {
            id:4, 
            img: img4,
            title:"Women Ethnic",
            rating: 4.5,
            color: "black",
            aosDelay: "600",

        },
        {
            id:5, 
            img: img2,
            title:"Women Ethnic",
            rating: 4.5,
            color: "black",
            aosDelay: "800",

        },
    ]
    
  return (
    <div className="mt-14 mb-12">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" className=" text-sm text-primary">
                    Top Selling Products For You
                </p>
                <h1 data-aos="fade-up" className=" text-3xl font-bold">PRODUCTS</h1>
                <p data-aos="fade-up" className=" text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur
                </p>
            </div>
            <div className="div">
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                    {ProductData.map((data)=> (
                        <div data-aos="fade-up"  key={data.id} className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                            <img src={data.img} className="h-[220px] w-[150px] object-cover rounded-md"/>
                            <div >
                                <h3 className="font-semibold"> {data.title} </h3>
                             <p className="text-sm text-gray-600">{data.color}</p>
                             <div className="flex items-center gap-1">
                            <FaStar className= "text-yellow-400"/>
                            <span>{data.rating}</span>
                             </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center ">
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"> View All button</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product