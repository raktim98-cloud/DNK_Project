<<<<<<< HEAD

=======
import Nav from "../Components/Nav"
>>>>>>> 76d3b264a04957ffae163e64bbb3b5d6d68fc353
import Banner from '../Components/Banner';
import Marquee from '../Components/Marquee';
import Card from '../Components/Card';
import ProductsSection from '../Components/ProductsSection';
import SpecialEddition from "../Components/SpecialEddition";
<<<<<<< HEAD
import Best from "../Components/Best";
=======
>>>>>>> 76d3b264a04957ffae163e64bbb3b5d6d68fc353



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
<<<<<<< HEAD
    <Best/>
=======
>>>>>>> 76d3b264a04957ffae163e64bbb3b5d6d68fc353
  </div>
  )
}

export default Home