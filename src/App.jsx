
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact"
import Accessories from "./assets/Pages/Accessories"
import Everythink from "./assets/Pages/Everythink"
import Men from "./assets/Pages/Men"
import Woman from "./assets/Pages/Woman"
import Layout from "./assets/Components/Layout";


function App() {

  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="accessories" element={<Accessories />} />
            <Route path="everythink" element={<Everythink />} />
            <Route path="men" element={<Men />} />
            <Route path="woman" element={<Woman />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
         </Route>
        

  
 
      </Routes>
    </BrowserRouter>
  )
}

export default App