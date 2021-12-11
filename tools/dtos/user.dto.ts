import { IsEmail, IsNotEmpty, Length } from 'class-validator';
import { GroupModel } from 'tools/model/group.model';
import { RoleModel } from 'tools/model/role.model';

import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @IsNotEmpty()
  @Length(2, 20)
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  @IsEmail()
  email: string;
}

export class UserLoginDto {
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}

export class UserUpdateDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  surname: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  email: string;
  roles: RoleModel[];
  groups: GroupModel[];
}
