import React from 'react'
import img1 from "../../assets/sale.jpg";
import img2 from "../../assets/women.jpg";
import img3 from "../../assets/shopping.jpg";
import Slider from "react-slick";

const ImageList=[
    {
        id:1,
        title: "Upto 50% off on all Men's Wear",
        img: img1,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:2,
        title: "Upto 30% off on all Women's Wear",
        img: img2,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:3,
        title: "Upto 70% off  all Product sale",
        img: img3,
        description: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
];

const Hero = ({handleOderPopup}) => {
  var setting={
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToscroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "Ease-in-out" ,
    pauseonHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8] "></div>
      <div className="container mx-auto px-4">
        <Slider {...setting}>
          {ImageList.map((data) =>(
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                   <h1 data-aos ="zoom-out" data-aos-duration ="500" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                   <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className="text-sm">{data.description}</p>
                   <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                    <button onClick={()=>{
                      handleOderPopup;
                    }} className="bg-gradient-to-r from bg-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      ORDER NOW
                    </button>
                   </div>
                </div>
                <div className="order-1 sm:-order-2">
                <div data-aos ="zoom-in"  data-aos-once="true" className="relative z-10">
                  <img src={data.img}  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"/>
                </div>
                </div>
              </div>
              </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero