import { Injectable } from '@nestjs/common';
import { ChatDto } from './dto/chat.dto';
import { PrismaService } from 'src/database/prisma.service';
import axios from 'axios';

@Injectable()
export class ChatService {

    constructor (private prisma: PrismaService) {}

    async create (data: ChatDto) {
        const user = await this.findUserById(data.userId);
        if (!user) {
            throw new Error('User not found');
        }
        const url = `http://localhost:8000/chat/${encodeURIComponent(user.name)}/${encodeURIComponent(data.message)}`
        const response = await axios.get(url);
        data.message = response.data;
        const chat = await this.prisma.chat.create({ data });
        return chat;
    }

    async findUserById (id: number) {
        const userName = await this.prisma.user.findUnique({
            where: { id },
            select: { name: true }
        });

        return userName;
    }
}
