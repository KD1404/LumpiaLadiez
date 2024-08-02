// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Food from './Food.js'
import Card from './Card.js'
import Navbar from './Navbar.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Home from './pages/Home.js'
import Menu from './pages/Menu.js'
import Order from './pages/Order.js'
import { Route, Routes } from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {

  return (
   <>
      <Navbar/>
      <div className="container"> 
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/menu" element={ <Menu />} />
          <Route path="/about" element={ <About />} />
          <Route path="/contact" element={ <Contact />} /> 
          <Route path="/order" element={ <Order />} /> 
        </Routes> 
      </div>
      {/* <Header/> */}
      {/* <Food/> */}
       {/* <Card/> */}
      
      <Footer/>
   </>
   
  );
}

// function Video({video}) {
//   return (
//     <div>
//       {/* <Thumbnail video={video} /> */}
//       <a href={video.url}>
//         <h3>{video.title}</h3>
//         <p>{video.description}</p>
//       </a>
//       {/* <LikeButton video ={video} />  */}
//      </div>
//   );
// }

export default App;
