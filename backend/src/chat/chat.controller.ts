import { Controller, Post, Body, Get } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    
    constructor (private readonly chatService: ChatService) {}

    @Get()
    async findAll() {
        try {
            return this.chatService.findAll();
        } catch (error) {
            return { error: error.message };
        }
    }

    @Post()
    async create(@Body() data: ChatDto) {
        try {
            return this.chatService.create(data);
        } catch (error) {
            return { error: error.message };
        }
    }
}
