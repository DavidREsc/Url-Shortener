import {Request, Response, NextFunction} from 'express'

const validateUrl = (req : Request, res : Response, next : NextFunction) => {
    next()
}

export default validateUrl
