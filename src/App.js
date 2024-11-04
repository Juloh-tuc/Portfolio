import React from 'react';
import './App.css'
import Sidebar from './components/sidebar/sidebar';
import Home from './components/home/home';
import Service from './components/services/Service';
import  About from './components/about/about';
import Resume from './components/resume/Resume';
import Portfolio from './components/porfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonials/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


const App =() => {
  
  return (
    
      <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonial/>
        <Blog/>
        <Contact/>






      </main>

      </>
       
)}

export default App
