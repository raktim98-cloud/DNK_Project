import { Outlet } from "react-router"
import Nav from "./Nav"
import Footer from "./Footer"
import Raktim from "./Raktim"

Outlet

function Layout() {
  return (
    <div>
        <Nav/>
        <Outlet/>
        
    </div>
  )
}

export default Layout