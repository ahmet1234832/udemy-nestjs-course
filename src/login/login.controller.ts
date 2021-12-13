import { Body, Controller, Post } from '@nestjs/common';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/model/user.model';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async createUser(@Body() body: UserLoginDto): Promise<UserModel> {
    return await this.loginService.loginUser(body);
  }
}
