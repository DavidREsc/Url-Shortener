import UrlForm from "./UrlForm"
import UrlList from "./UrlList"
import axios from 'axios'
import {useUrls} from '../../contexts/UrlContext'

type Input = {
    urlInput: string
}

const UrlShortener = () => {

  const {storeUrl, urls} = useUrls()

  const onSubmitHandler = async (input : Input) => {
    const {urlInput} = input
    
    try {
      const response = await axios.post('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        urlInput
      })
      const urlObject = {
        original: urlInput,
        shortened: response.data.result.full_short_link2,
      }

      storeUrl?.(urlObject)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='url-shortener-container'>
        <UrlForm onSubmitHandler={onSubmitHandler}/>
        <UrlList urls={urls}/>
    </div>
  )
}

export default UrlShortener