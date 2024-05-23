import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Navbar/Hero/Hero';
import Products from './components/Products/Products';
import Aos from 'aos';
import "aos/dist/aos.css"
import TopProducts from './components/TopProducts/TopProducts';
import Banner from './components/Banner/Banner';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';


const App = () => {

   React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    })
    Aos.refresh()
   },[])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200' >
    <Navbar/>
    <Hero />
    <Products/>
    <TopProducts/>
    <Banner/>
    <Subscribe/>
    <Products/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}

export default App;
