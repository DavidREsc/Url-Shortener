import {AiOutlineMenu} from 'react-icons/ai'

interface NaviconProps {
  handleClick: () => void
}

const Navicon = ({handleClick} : NaviconProps) => {
  return (
    <div className='mobile-nav-icon'>
        <AiOutlineMenu onClick={handleClick}/>
    </div>
  )
}

export default Navicon