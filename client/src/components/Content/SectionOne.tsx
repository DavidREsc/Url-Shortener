import '../../styles/content.css'
import {ReactComponent as ImgWorking} from '../../images/illustration-working.svg'

const SectionOne = () => {
  return (
    <section className='section-one'>
      <div className='section-one-hpb'>
        <h1 className='section-one-header'>
          More than just shorter links
        </h1>
        <p className='section-one-paragraph'>
          Build your brand's recognition and get detailed insights on how your links are performing.
        </p>
        <button className='section-one-get-started-btn'>Get Started</button>
      </div>
      <ImgWorking className='section-one-img'/>
    </section>
  )
}

export default SectionOne