import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Controller('user')
export class UserController {
    
    constructor (private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() data: UserDto) {
        console.log(data)
        return this.usersService.create(data);
    }
}
