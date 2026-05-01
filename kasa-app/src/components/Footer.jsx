import logo from '../assets/images/LOGO.png'

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#000000',
            height: '209px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px'
        }}>
            <img src={logo} alt="Kasa Logo" style={{ width: '122px', height: '40px', filter: 'brightness(0) invert(1)' }} />
            <p style={{
                color: '#FFFFFF',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                margin: 0
            }}>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}
export default Footer