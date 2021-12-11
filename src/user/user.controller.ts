import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: UserCreateDto) {
    return this.userService.createUser(body);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
