import { useContext, createContext, ReactNode, useState, useEffect } from "react"

interface IUrlContext {
    storeUrl? : (url : UrlObject) => void,
    urls : UrlObject[]
}

export type UrlObject = {
    original: string,
    shortened: string
}

const defaultState = {
    urls : []
}

const UrlContext = createContext<IUrlContext>(defaultState)

export const useUrls = () => {
    return useContext(UrlContext)
}

export const UrlProvider = ({children}: {children : ReactNode}) => {
    const [urls, setUrls] = useState<UrlObject[]>([])

    useEffect(() => {
        const arrUrls = localStorage.getItem('shortlyUrls')
        if (arrUrls) setUrls(JSON.parse(arrUrls))
    },[])

    const storeUrl = (url : UrlObject) => {
        const array = urls.concat(url)
        localStorage.setItem('shortlyUrls', JSON.stringify(array))
        setUrls(array)
    }

    const value = {
        storeUrl,
        urls
    }

    return (
        <UrlContext.Provider value={value}>
            {children}
        </UrlContext.Provider>
    )
}
