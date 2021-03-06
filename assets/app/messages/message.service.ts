import {Message} from "./message.model";

export class MessageService {
    private messages: Message[] = [];

    addMessage(message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessages() {
        return this.messages
    }

    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}