import { Outlet } from "react-router"
import Nav from "./Nav"

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