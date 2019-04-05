import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer} from 'routing-controllers'
import EventController from './events/controller'
import TicketController from './ticket/controller'
import CommentController from './comment/controller'
import UserController from './user/controller';
import LoginController from './logins/controller';
// import { verify } from './jwt';

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
      EventController,
      TicketController, 
      CommentController, 
      UserController,
      LoginController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))
