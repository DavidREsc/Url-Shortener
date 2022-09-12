import SectionOne from './SectionOne'
import UrlShortener from './UrlShortener'
import SectionTwo from './SectionTwo'
import BDF from './BDF'
import { UrlProvider } from '../../contexts/UrlContext'

const Content = () => {
  return (
    <div className='content'>
        <SectionOne />
        <UrlProvider>
          <UrlShortener />
        </UrlProvider>
        <SectionTwo />
        <BDF />
    </div>
  )
}

export default Content