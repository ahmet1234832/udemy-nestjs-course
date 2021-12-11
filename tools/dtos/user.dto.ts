export class UserCreateDto {
  name: string;
  surname: string;
  password: string;
  email: string;
}

export class UserLoginDto {
  email: string;
  password: string;
}

export class UserUpdateDto {
  name: string;
  surname: string;
  password: string;
  email: string;
}
