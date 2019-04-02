import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer} from 'routing-controllers'
import UserController from './users/controller'
import EventController from './events/controller'
import TicketController from './tickets/controller'
const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
        UserController,
        EventController,
        TicketController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))