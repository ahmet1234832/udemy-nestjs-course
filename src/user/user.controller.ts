import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Roles } from 'libs/decorator/role.decorator';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { filterModel } from 'tools/model/filter.model';
import { UserModel } from 'tools/model/user.model';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(@Query() query: filterModel) {
    return await this.userService.findAll(query);
  }

  @Get(':id')
  @Roles('Developer')
  async getUser(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Post()
  @Roles('Admin')
  async createUser(@Body() body: UserCreateDto): Promise<UserCreateDto> {
    body.password = await this.userService.convertToHash(body.password);
    return await this.userService.createUser(body);
  }

  @Roles('Operator')
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<UserUpdateDto> {
    return await this.userService.update(id, userUpdateDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<UserModel> {
    return await this.userService.delete(id);
  }
}
