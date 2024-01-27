import express          from 'express';
import cors             from 'cors'
import os               from 'os'
import * as DB          from './database/index.js'
import SpellController  from './controllers/spellController.js';
import customMiddleware from './middlewares/custom.js';
import ItemController   from './controllers/itemController.js';

const app = express();

// configs

app.use(express.json());
app.use(cors())
// http opened

app.get('/api', (req, res, next)=>res.status(200).json('oi xicaro'))

// middlewares
app.use(customMiddleware)

// http protected

// spell
app.post    ('/api/spell',      SpellController.create)
app.get     ('/api/spell',      SpellController.getAll)

// item
app.post    ('/api/item',      ItemController.create)
app.get     ('/api/item',      ItemController.getAll)


app.get     ('/api/libera',     (req, res, next)=>res.status(201).json('liberado'))

// listen


DB.default.connectDatabase
.then(
    app.listen(9000, '0.0.0.0',  ()=>{
        console.log('serving')
        setInterval(()=>{
            console.clear()
            console.log(os.platform())
            console.log(`Total memory:      ${os.totalmem() / (1024 ** 3)}`)
            console.log(`Free  memory:      ${os.freemem() / (1024 ** 3)}`)
            console.log(`Used  memory:      ${(os.totalmem() - os.freemem()) / (1024 ** 3)}`)
        }, 1000)
    })
)
.catch((e)=>console.log('error ' + e))

