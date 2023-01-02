import { Request, Response} from 'express'
import { CreateUserUseCase } from './createUserUseCase'


class CreateUserController {
    constructor () {

    }

    async handle(request: Request, response: Response): Promise<Response> {
        const data = request.body

        if(data.teste === 'teste') {
            const createUserUseCase = new CreateUserUseCase()
    
            const responseEx = await createUserUseCase.execute(data)
    
            return response.json(responseEx).status(200)
        } else {

            return response.json({msg: 'Invalid'}).status(400)
        }
    }
}

export { CreateUserController }