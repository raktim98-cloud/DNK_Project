import { Link } from "react-router";
import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";


function AboutFollow() {
  return (
    <section style={{ backgroundImage: `url('About_Banner_3.jpg')` }} className='w-full bg-no-repeat bg-center bg-cover bg-local lg:bg-fixed px-20'>
        <div className="container mx-auto py-5">
            
            <div className="px-2 py-2 text-center bg-gray-100 ">
                    <span className="h-[10px] w-full bg-blue-600">----</span>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-gray-800 pb-5">Follow Us</h3>
                <div className="flex space-x-6 items-center justify-center">
                    <Link to={"/"} className="text-2xl text-blue-600 hover:text-blue-800"><LiaFacebookF /></Link>
                    <Link to={"/"} className="text-2xl text-blue-400 hover:text-blue-600"><TiSocialTwitter /></Link>
                    <Link to={"/"} className="text-2xl text-red-500 hover:text-red-700"><FaInstagram /></Link>
                    <Link to={"/"} className="text-2xl text-orange-500 hover:text-orange-700"><FaGoogle /></Link>
                </div>
            
                
            </div>
        </div>
    </section>
  )
}

export default AboutFollow