import HeroImg from '../assets/img/HeroImg.svg'
import HeroKeyword from '../assets/components/HeroKeyword'
const Hero = () => {
    return <section className="hero">
        <h1 className="title"><img src={HeroImg} alt=""/></h1>
        <div className="keyword">
            <HeroKeyword type={"text"} content={"Frontend Dev"}/>
            <HeroKeyword type={"text"} content={"React"}/>
            <HeroKeyword type={"text"} content={"JavaScript"}/>
            <HeroKeyword type={"text"} content={"Communicator"}/>
            <HeroKeyword type={"text"} content={"Solid Mind"}/>
        </div>
    </section>
}

export default Hero