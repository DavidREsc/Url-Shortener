import {useState} from 'react'
import { UrlObject } from "../../contexts/UrlContext"

interface ICopyBtn {
  url: UrlObject
}

const CopyBtn = (props : ICopyBtn) => {
  const [copied, setCopied] = useState(false)
  const {url} = props
  const handleClick = () => {
    setCopied(true)
    navigator.clipboard.writeText(url.shortened)
  }
  return (
    <button className={copied ? 'copy-btn active' : 'copy-btn'}onClick={handleClick}>{copied ? 'Copied!' : 'Copy'}</button>
  )
}

export default CopyBtn