import { Outlet } from "react-router"
import Nav from "./Nav"
<<<<<<< HEAD
import Footer from "./Footer"
import Raktim from "./Raktim"
=======
>>>>>>> 76d3b264a04957ffae163e64bbb3b5d6d68fc353

Outlet

function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
<<<<<<< HEAD
        <Footer/>
        <Raktim/>
=======
>>>>>>> 76d3b264a04957ffae163e64bbb3b5d6d68fc353
    </div>
  )
}

export default Layout