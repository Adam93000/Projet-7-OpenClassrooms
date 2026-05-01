import logo from '../assets/images/LOGO.png'
import { NavLink } from 'react-router-dom'

function Header() {
    const navLinkStyle = ({ isActive }) => ({
        textDecoration: isActive ? 'underline' : 'none',
        color: '#000000',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: '24px'
    })
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px' }}>
            <img src={logo} alt="Kasa Logo" style={{ width: '210px', height: '68px' }} />
            <nav>
                <ul style={{ display: 'flex', gap: '50px', listStyle: 'none', margin: 0, padding: 0 }}>
                    <li>
                        <NavLink to="/" style={navLinkStyle}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" style={navLinkStyle}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header