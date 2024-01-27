import { secretKey } from "../config/env.js"

export default function customMiddleware(req, res, next) {
    if (req.headers['x-http-custom-key'] == secretKey) {
        next()
    } else {
        return res.status(403).json({ message: 'unauthorized' })
    }
}