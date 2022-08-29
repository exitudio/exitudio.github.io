import express from 'express'
import { ServerRouter, createServerRenderContext } from 'react-router'
import Layout from '../app/components/main/Layout'
const router = express.Router()

const context = createServerRenderContext();
 
router.get('/ssr',(req,res)=>{
    
    const html = renderToString(
        <ServerRouter
            location={req.url}
            context={context}
        >
            <Layout />
        </ServerRouter>
        )

    res.send(html)
})
module.exports = router