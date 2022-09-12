import '../../styles/footer.css'
import {features, resources, company} from '../../data/footerData'
import {ReactComponent as Facebook} from '../../images/icon-facebook.svg'
import {ReactComponent as Twitter} from '../../images/icon-twitter.svg'
import {ReactComponent as Pinterest} from '../../images/icon-pinterest.svg'
import {ReactComponent as Instagram} from '../../images/icon-instagram.svg'



const Footer = () => {
  return (
    <footer className='footer-container'>
      <h1 className='footer-title'>Shortly</h1>
      <ul className='footer-list'>
        <li className='list-title'>Features</li>
        {features.map((f, idx) => {
          return (
            <li className='footer-list-item' key={idx}>{f}</li>
          )
        })}
      </ul>
      <ul className='footer-list'>
        <li className='list-title'>Resources</li>
        {resources.map((r, idx) => {
          return (
            <li className='footer-list-item' key={idx}>{r}</li>
          )
        })}
      </ul>
      <ul className='footer-list'>
        <li className='list-title'>Company</li>
        {company.map((c, idx) => {
          return (
            <li className='footer-list-item' key={idx}>{c}</li>
          )
        })}
      </ul>
      <ul className='footer-list-icons'>
        <li className='footer-list-item'><Facebook /></li>
        <li className='footer-list-item'><Twitter /></li>
        <li className='footer-list-item'><Pinterest /></li>
        <li className='footer-list-item'><Instagram /></li>
      </ul>
    </footer>
  )
}

export default Footer