import 'reflect-metadata'
import setupDb from './db'
import {createKoaServer} from 'routing-controllers'
import UserController from './users/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
    controllers: [
        UserController
    ]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))