import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer} from 'routing-controllers'
import AdvertisementController from './advertisements/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
      AdvertisementController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))
