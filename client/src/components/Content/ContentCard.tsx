import {FC} from 'react'
interface IContentCard {
    svg : FC
    title : string
    paragraph : string
    style: Style
}

type Style= {
    alignSelf: string
}
const ContentCard = (props : IContentCard) => {
  const {svg: Svg, title, paragraph, style} = props
  return (
    <div className='content-card' style={style}>
        <div className='svg-container'>
            <Svg />
        </div>
        <div className='content-card-tp'>
            <h1 className='content-card-title'>{title}</h1>
            <p className='content-card-paragraph'>{paragraph}</p>
        </div>
    </div>
  )
}

export default ContentCard