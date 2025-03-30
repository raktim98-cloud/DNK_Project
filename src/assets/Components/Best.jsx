import { BiWorld } from "react-icons/bi";
import { IoBodySharp } from "react-icons/io5";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiLock } from "react-icons/bi";

function Best() {
    const features = [
        {
            title:"Worldwide Shippinhg",
            discription:"It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            logo:<BiWorld />

        },
        {
            title:"Best Quality",
            discription:"It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            logo:<IoBodySharp />

        },
        {
            title:"Best Offers",
            discription:"It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            logo:<MdOutlineLocalOffer />

        },
        {
            title:"Secure Payments",
            discription:"It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
            logo:<BiLock />

        },
    ]
  return (
    <section className="py-10 md:py-20 lg:py-30 bg-gray-50">
        <div className="container mx-auto">
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20">
                    {features.map((features)=>(
                        <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3 items-center justify-center">
                            
                            <span className="text-5xl">{features.logo}</span>
                            <h3 className="text-xl font-semibold pt-1.5 text-gray-800">{features.title}</h3>
                            <p className="text-gray-600 text-md leading-relaxed">{features.discription}</p>
                        </div>
                    ))}
                </div>
            
        </div>
    </section>
  )
}

export default Best