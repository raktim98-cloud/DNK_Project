import { LiaFacebookF } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
    const icons = [
        {
            icon:<LiaFacebookF />
        },
        {
            icon:<FaYoutube />
        },
        {
            icon:<TiSocialTwitter />
        },
        {
            icon:<FaInstagram />
        },
        {
            icon:<FaGoogle />
        },
        {
            icon:<TiSocialLinkedin />
        },
    ]
  return (
    <section className="bg-white pt-12 pb-8">
        <div className="container mx-auto">
            <div>
                <div className="py-10 border-t border-[#E5E5E5] border-b">
                    <h2 className="text-[1.625rem] font-bold leading-[1.3em] text-center">SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-12 items-center justify-center text-center  pt-12 ">
                    <div className="flex flex-col gap-2 items-center justify-center">
                        <div className="w-[90px] h-[30px] "><img className="size-full" src="footer-logo.png" alt="logo" /></div>
                        <h3 className="text-[22px] leading-[1.3em] font-bold pt-5">The best look anytime, anywhere.</h3>
                    </div>
                    <div>
                        <h3 className="text-[22px] pb-[15.4px] cursor-pointer hover:text-blue-600">For Her</h3>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman Jenes</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Tops & Shirt</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman Jackets</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Heels & Flats</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman & Accories</p>
                    </div>
                    <div>
                        <h3 className="text-[22px] pb-[15.4px] cursor-pointer hover:text-blue-600">For Her</h3>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman Jenes</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Tops & Shirt</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman Jackets</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Heels & Flats</p>
                        <p className="text-[#333333] cursor-pointer hover:text-blue-600">Woman & Accories</p>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center md:justify-start">
                        <h3 className="text-[22px] pb-[15.4px]">Subscribe</h3>
                        <input className="p-[12px]" type="email" name="email" id="email" placeholder="Enter your email" />
                        <button className="bg-blue-900 text-white px-8 py-3 rounded-[4px] font-bold hover:bg-yellow-300 transition-all mt-2">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <div className="py-10 border-t border-[#E5E5E5] border-b flex flex-col md:flex-row gap-12 items-center justify-center text-center md:justify-between px-10">
                    <p>Copyright © 2025 Brandstore. Powered by Brandstore.</p> 
                    <div className="flex  items-center justify-center gap-5">
                        {icons.map((icons) =>(
                            <div className="group">
                                <span className="text-xl group-hover:text-blue-700 transition custom-font">{icons.icon}</span>
                            </div>
                        ))}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer