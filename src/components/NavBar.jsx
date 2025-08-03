import logo from '../assets/bulat.webp'

const NavBar = () => {
    return (
        <nav className="container">
            <ul>
                <li><img src={logo} alt="" style={{height : "45px"}} /></li>
                <li><strong>Keinan</strong></li>
            </ul>
            <ul>
                <li>
                    <a target='_blank' href="https://github.com/keinan21" className="contrast">github</a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com/keinan_2117/" className="contrast">Instagram</a>
                </li>
                <li>
                    <a href="https://keinan.rf.gd/" target='_blank' className="contrast">Web</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar