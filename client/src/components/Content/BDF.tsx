import {ReactComponent as BrandRecognition} from '../../images/icon-brand-recognition.svg'
import {ReactComponent as DetailedRecords} from '../../images/icon-detailed-records.svg'
import {ReactComponent as FullyCustomizable} from '../../images/icon-fully-customizable.svg'
import ContentCard from './ContentCard'

const BDF = () => {
  const titleBR = 'Brand Recognition'
  const paragraphBR = 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.'

  const titleDR = 'Detailed Records'
  const paragraphDR = 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisons.'

  const titleFC = 'Fully Customizable'
  const paragraphFC = 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  return (
    <div className='bdf-container'>
        <ContentCard svg={BrandRecognition} title={titleBR} paragraph={paragraphBR} style={{alignSelf: 'flex-start'}}/>
        <ContentCard svg={DetailedRecords} title={titleDR} paragraph={paragraphDR} style={{alignSelf: 'center'}}/>
        <ContentCard svg={FullyCustomizable} title={titleFC} paragraph={paragraphFC} style={{alignSelf: 'flex-end'}}/>
    </div>
  )
}

export default BDF