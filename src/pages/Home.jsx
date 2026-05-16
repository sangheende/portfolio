import TopNav from '../assets/components/TopNav'
import BottomNav from '../assets/components/BottomNav'
import Hero from './Hero'
import About from './About'
import '../assets/styles/pages/home.css'
const Home = () => {
    return<>
        <TopNav />
        <Hero/>
        <About/>
        <BottomNav />
    </>
}

export default Home
