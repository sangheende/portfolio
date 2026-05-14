import '../styles/components/nav.css'

const TopNav = () => {
    return <nav className="topNav">
        <div className="topNav__menu">
            <div className="topNav__menu__item active">
                Home
            </div>
            <div className="topNav__menu__item">
                Project
            </div>
            <div className="topNav__menu__item">
                About
            </div>
        </div>
        <div className="topNav__link">
            <div className="topNav__link__item">
                Github
            </div>
            <div className="topNav__link__item">
                Velog
            </div>
        </div>
    </nav>
}

export default TopNav