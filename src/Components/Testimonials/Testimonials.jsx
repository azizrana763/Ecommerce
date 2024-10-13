import React from 'react';
import Slider from "react-slick";
import img1 from "../../assets/virat.jpg";
import img2 from "../../assets/Ab.jpg";
import img3 from "../../assets/babar.jpg";
import img4 from "../../assets/Rohit.jpg";
import img5 from "../../assets/Afridi.jpg";

const TestimonialData=[
    {
        id:1,
        name: "VIRAT KOHLI",
        img: img1,
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:2,
        name: "AB DE VILLIERS",
        img: img2,
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:3,
        name: "BABAR AZAM",
        img: img3,
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:4,
        name: "ROHIT SHARMA",
        img: img4,
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
    {
        id:5,
        name: "SHAHID AFRIDI",
        img: img5,
        text: "loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque, expedita rem aperiam error molestias, impedit corrupti hic reiciendis, ad voluptate quia nemo? Dicta, dolorum! Reiciendis ullam sint dignissimos consequuntur."
    },
];

const Testimonials = () => {
    var setting={
        dots: false,
        arrows: false,
        Infinite: true,
        speed: 500,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear" ,
        pauseonHover: true,
        pauseOnFocus: true,
        responsive:[
            {
                breakpoint: 10000,
                setting:{
                    slidesToScroll:1,
                    slideToShow:3,
                    Infinite: true,
                },
            },
            {
            breakpoint: 1024,
                setting:{
                    slidesToScroll:1,
                    slideToShow:2,
                    intialSlider: 2,
                },
            },
            {
                breakpoint: 640,
                setting:{
                    slidesToScroll:1,
                    slideToShow:1,
                },

            },
            
        ],
      };
    
  return (
    <div className="py-10 mb-10">
        <div className="container">
            <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">What Our Customers Are Saying
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero sed illum optio nam perferendis ipsam</p>

            </div>
            <div  data-aos="zoom-in">
            <Slider {...setting}>
          {TestimonialData.map((data) =>(
            <div className="my-6">
              <div  key={data.id} className="flex flex-col shadow-lg gap-4 py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative ">
                <div className="mb-4">
                <img src={data.img}  className="w-20 h-20 rounded-full"/>
                </div>
                <div className="flex flex-col gap-4  items-center">
                    <div className="space-y-3">
                    <p className="text-xs dark:text-slate-300 text-gray-500 ">{data.text}</p>
                    <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                </div>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
          ))}
        </Slider>

            </div>
        </div>
    </div>
  )
}

export default Testimonials