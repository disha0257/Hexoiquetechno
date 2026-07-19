import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";


import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";


import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ServiceDetails from "./pages/ServiceDetails";
import Privacy from "./pages/Privacy";
import useLenis from "./hooks/useLenis";



function AppContent() {


const location = useLocation();


const [heroVisible,setHeroVisible] = useState(true);



const headerVisible =
location.pathname === "/" 
? heroVisible 
: true;



return (

<>

<Header visible={headerVisible}/>



<AnimatePresence 
mode="wait"
>


<Routes 
location={location}
key={location.pathname}
>


<Route

path="/"

element={
<Home 
setHeroVisible={setHeroVisible}
/>
}

/>



<Route

path="/about"

element={<About/>}

/>



<Route

path="/services"

element={<Services/>}

/>


<Route
  path="/services/:slug"
  element={<ServiceDetails />}
/>


{/* IMPORTANT:
Keep dynamic route BEFORE /blog
*/}


<Route

path="/blog/:id"

element={<BlogDetails/>}

/>

<Route 
path="/privacy" 
element={<Privacy />} 
/>

<Route

path="/blog"

element={<Blog/>}

/>



<Route

path="/contact"

element={<Contact/>}

/>



</Routes>


</AnimatePresence>


</>

)

}





function App(){


useLenis();



return (

<>


<Loader/>

<ScrollProgress/>


<Router>

<AppContent/>

</Router>
</>
)
}
export default App;