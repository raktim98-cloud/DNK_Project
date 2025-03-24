import AboutBanner from "../Components/AboutBanner"
import AboutTeam from "../Components/AboutTeam"
import AboutWho from "../Components/AboutWho"


function About() {
  return (
    <div className="min-h-screen">
    
    <div
      className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-10]"
      style={{ backgroundImage: "url('/About_Banner_1.jpg')" }}
    ></div>

      <AboutBanner/>
      <AboutWho/>
      <AboutTeam/>

    </div>
  )
}

export default About