import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService
    ) {
    super({
      usernameField: 'email',
      passwordField: 'otp'
    });
  }
  async validate(email: string, otp: string): Promise<any> {
    const user = await this.authService.validateUser(email, otp);
    if(!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}