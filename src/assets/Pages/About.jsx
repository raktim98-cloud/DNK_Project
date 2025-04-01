

import AboutBanner from "../Components/AboutBanner"
import AboutFollow from "../Components/AboutFollow"
import AboutTeam from "../Components/AboutTeam"
import AboutWho from "../Components/AboutWho"
import Best from "../Components/Best"


function About() {
  return (
    <div className="min-h-screen">
    
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-bottom z-[-10] "
      style={{ backgroundImage: "url('/About_Banner_1.jpg')" }}
    ></div>

      <AboutBanner/>
       <AboutWho/>
      <AboutTeam/>
      <AboutFollow/>
      {/*<Best/> */}

    </div>
  )
}

export default About