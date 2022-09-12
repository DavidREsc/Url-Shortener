import { UrlObject } from "../../contexts/UrlContext"
import CopyBtn from './CopyBtn'

interface IUrlList {
  urls: UrlObject[]
}

const UrlList = (props : IUrlList) => {
  const {urls} = props
  return (
    <ul className='url-list'>{urls && urls.map((url, idx) => {
      return (
        <li key={idx} className='url-list-item'>
          <span className='url-list-item-original'>{url.original}</span>
          <span className='url-list-item-shortened'>
            {url.shortened}
            <CopyBtn url={url}/>
          </span>
        </li>
      )
    })}</ul>
  )
}

export default UrlList