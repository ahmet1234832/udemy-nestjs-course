import { Injectable } from '@nestjs/common';
import { UserCreateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/model/user.model';

const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (result.length === 0) {
      this.creatingMockUser({
        name: 'Ufuk',
        surname: 'Kılıç',
        email: 'ufukkilic97@hotmail.com',
        password: 'ufuk123olan',
      });
    }
    return result;
  }

  createUser(userCreateDto: UserCreateDto) {
    const isExist = result.find((res) => res.email == userCreateDto.email);
    if (isExist) {
      return isExist;
    }
    this.creatingMockUser(userCreateDto);
    return result.slice(result.length - 1, result.length);
  }

  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.name = data.name;
    user.surname = data.surname;
    user.email = data.email;
    user.password = data.password;

    result.push(user);
  }
}
