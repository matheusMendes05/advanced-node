import '../config/module-alias'
import { PersonController, Speaker } from '@/application/controllers/person'

class Server {
    init(speaker: Speaker) {
        console.log(speaker.speak('matheus'));
        console.log(speaker.speak())
    }
}

const server = new Server()
server.init(new PersonController())


