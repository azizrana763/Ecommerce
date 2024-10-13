import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Product from "./Components/Products/Product";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";


function App() {
  const[orderPopup,setOrderPopup]= useState(false);
  const handleOrderPopup=() =>{
    setOrderPopup(!orderPopup);
  };

  useEffect(()=>{
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  } ,[]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOderPopup={handleOrderPopup}/>
        <Hero handleOderPopup={handleOrderPopup}/>
        <Product/>
        <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
      </div>
    </>
  )
}

export default App
