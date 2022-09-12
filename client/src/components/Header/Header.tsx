import {useState} from 'react'
import Navbar from './Navbar'
import Navicon from './Navicon'
import {ReactComponent as Logo} from '../../images/logo.svg'
import '../../styles/header.css'

const Header = () => {
  const [navActive, setNavActive] = useState(false)

  const handleClick = () => {
    setNavActive(prevState => !prevState)
  }

  return (
    <header className='header'>
      <Logo className='header-logo'/>
      <Navbar navActive={navActive}/>
      <Navicon handleClick={handleClick}/>
    </header>
  )
}

export default Header