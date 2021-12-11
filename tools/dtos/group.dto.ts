import { IsNotEmpty, Length } from 'class-validator';
import { RoleDto } from './role.dto';

export class GroupCreateDto {
  @IsNotEmpty()
  @Length(2, 30)
  name: string;
  @IsNotEmpty()
  @Length(2, 130)
  description: string;
}

export class GroupRolesDto {
  roles: RoleDto[];
}
