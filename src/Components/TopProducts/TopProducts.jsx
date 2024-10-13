import React from 'react'
import img1 from "../../assets/shirt.png";
import img2 from "../../assets/shirt2.png";
import img3 from "../../assets/shirt3.png";
import { FaStar } from 'react-icons/fa6';

const ProductsData=[
    {
        id:1,
        title: "casual Wear",
        img: img1,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:2,
        title: "Printed Shirt",
        img: img2,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:3,
        title: "Women Shirt",
        img: img3,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
];
const TopProducts = ({handleOrderPopup}) => {

  return (
    <div className="container">
        <div className="text-center mg-24 ">
            <p data-aos="fade-up" className=" text-sm text-primary ">Top Rated Products For You</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Best Products</h1>
            <p data-aos="fade-up" className=" text-xs text-gray-400 text-center mb-10 max-w-[600px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam et laborum sunt inventore nam molestias consectetur voluptatem repudiandae excepturi ab?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, magnam et laborum sunt inventore nam molestias consectetur voluptatem repudiandae excepturi ab?
            </p>
            <div >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ProductsData.map((data)=> (
                        <div data-aos="zoom-in" className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                            <div>
                                <img src={data.img} className="h-[220px] w-[150px] mx-auto rounded-md group-hover:scale-105 duration-300 drop-shadow-md"></img>
                            </div>
                            <div className="w-full flex items-center justify-center gap-1">
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                                <FaStar className="text-yellow-500"/>
                            </div>
                            <h1 className="text-xl font-bold">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                            <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" onClick={handleOrderPopup}>
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopProducts