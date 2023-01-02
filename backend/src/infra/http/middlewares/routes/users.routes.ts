import { Router } from 'express'
import { CreateUserController } from '../../../../../modules/acconts/useCases/createUser/createUserController'
import { ProfileUserController } from '../../../../../modules/acconts/useCases/profileUser/profileUserController'

const usersRoutes = Router()

const profileUserController = new ProfileUserController()
const createUserController = new CreateUserController()

usersRoutes.get('/listallusers', profileUserController.handle)

usersRoutes.post('/createuser', createUserController.handle)

export { usersRoutes }