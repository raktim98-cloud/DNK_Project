import ContactForm from "../Components/ContactForm"
import ContactHelp from "../Components/ContactHelp "
import ContactUs from "../Components/ContactUs"


function Contact() {
  return (
    <div className="min-h-screen">
    
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-10]"
      style={{ backgroundImage: "url('/banner-06.jpg')" }}
    ></div>

      
    <ContactUs/>
    <ContactHelp/>

    <ContactForm/>
    </div>
  )
}

export default Contact