import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutServices from '../components/AboutServices'
import Education from '../components/Education'
import Reviews from '../components/Reviews'
import InstagramCarousel from '../components/InstagramCarousel'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page() {
    return (
        <main>
            <Navbar/>
            <Hero/>
            <AboutServices/>
            <Education/>
            <Reviews/>
            <InstagramCarousel/>
            <FAQ/>
            <Contact/>
            <Footer/>
        </main>
    )
}
