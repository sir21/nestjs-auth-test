import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUsers = [
  {
    id: 1,
    username: 'jake',
    password: 'password',
  },
  {
    id: 2,
    username: 'jack',
    password: 'password',
  },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser({ username, password }: AuthPayloadDto) {
    const findUser = fakeUsers.find((user) => user.username === username);
    if (!findUser) return null;

    if (findUser.password !== password) return null;

    {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
