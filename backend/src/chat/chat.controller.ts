import { Controller, Post, Body } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    
    constructor (private readonly chatService: ChatService) {}

    @Post()
    async create(@Body() data: ChatDto) {
        try {
            return this.chatService.create(data);
        } catch (error) {
            return { error: error.message };
        }
    }
}
