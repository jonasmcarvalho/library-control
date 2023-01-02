import { inject, injectable} from 'tsyringe'


// @injectable()

class ProfileUserUseCase {
    constructor() {
        
    }

    async execute(): Promise<Object> {
        const msg = 'Hellow World Bitcho'        

        return {
            msg,
            status: 200
        }
    }
}

export { ProfileUserUseCase }