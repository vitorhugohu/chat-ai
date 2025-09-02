import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsersService {

    constructor (private prisma: PrismaService) {}

    async create (data: UserDto) {
        await this.prisma.onModuleInit((data));
    }
}
