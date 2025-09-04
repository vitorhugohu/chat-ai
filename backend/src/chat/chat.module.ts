import { Module } from '@nestjs/common';
import { ChatService } from 'src/chat/chat.service';
import { ChatController } from '../chat/chat.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    providers: [ChatService, PrismaService],
    controllers: [ChatController]
})
export class ChatModule {}
