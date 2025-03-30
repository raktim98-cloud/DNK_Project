import Banner from '../Components/Banner';
import Marquee from '../Components/Marquee';
import Card from '../Components/Card';
import ProductsSection from '../Components/ProductsSection';
import SpecialEddition from "../Components/SpecialEddition";
import Best from "../Components/Best";



function Home() {
  
  
  return (
    
    <div className="min-h-screen">
    
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-10]"
      style={{ backgroundImage: "url('/home-new-bg-free-img (1).jpg')" }}
    ></div>
     <Banner />
    <Marquee/>
    <Card/>
    
    <ProductsSection/>
    <SpecialEddition/>
    <Best/>
  </div>
  )
}

export default Home