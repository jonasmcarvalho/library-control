import { Request, Response} from 'express'
import { ProfileUserUseCase } from './profileUserUseCase'


class ProfileUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const id = request.body.id

        console.log('listallusers')

        if(true) {
            const profileUserUseCase = new ProfileUserUseCase()
            const responseUserUseCase = await profileUserUseCase.execute()
    
            return response.json(responseUserUseCase).status(200)
        } else {
            return response.json({msg: 'ID invalido'}).status(400)
        }
    }
}

export { ProfileUserController }