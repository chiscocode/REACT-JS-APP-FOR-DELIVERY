import './App.css';
import ResponsiveNavBar from "./components/ResponsiveNavBar"
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Service from "./components/Service/Service"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import {BrowserRouter,Routes,Route,} from "react-router-dom";



function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
     <ResponsiveNavBar/>

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/service" element={<Service/>}/>
      <Route exact path="/contact" element={<Contact/>}/>


      </Routes>
      <Footer/>

      {/* <Home/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
