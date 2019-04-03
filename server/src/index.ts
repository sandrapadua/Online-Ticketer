import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer} from 'routing-controllers'
import EventController from './events/controller'
import EventCategoryController from './eventCategory/controller'


const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
      EventController,EventCategoryController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))
