import { Module } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { UserController } from '../users/user.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
    providers: [UsersService, PrismaService],
    controllers: [UserController]
})
export class UserModule {}
