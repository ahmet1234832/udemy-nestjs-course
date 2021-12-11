export class UserCreateDto {
  name: string;
  surname: string;
  password: string;
  email: string;
  birthdate: Date;
}

export class UserLoginDto {
  email: string;
  password: string;
}
