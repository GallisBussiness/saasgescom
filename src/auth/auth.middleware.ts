/* eslint-disable prettier/prettier */
import { ForbiddenException, HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService){}
  use(req: Request, res: Response, next: NextFunction) {
    if(req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1];
      try {
        const decoded = this.jwtService.verify(token) as User;
        const { login, role, _id } = decoded;
        req.user = { login,role, _id };
      } catch (error) {
        console.log(error)
        throw new HttpException("Authentication failed", 440);
      }
    }
    next();
  }
}
