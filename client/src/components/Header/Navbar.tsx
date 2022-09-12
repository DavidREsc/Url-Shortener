interface NavbarProps {
  navActive: boolean
}

const Navbar = ({navActive} : NavbarProps) => {
  return (
    <nav className={navActive ? 'navbar active' : 'navbar'}>
        <ul className='navbar-menu-items'>
            <li><button className='navbar-item'>Features</button></li>
            <li><button className='navbar-item'>Pricing</button></li>
            <li><button className='navbar-item'>Resources</button></li>
        </ul>
        <ul className='navbar-auth-buttons'>
            <li><button className='login-btn'>Login</button></li>
            <li className='signup-btn-li'><button className='signup-btn'>Sign Up</button></li>
        </ul>
    </nav>
  )
}

export default Navbar