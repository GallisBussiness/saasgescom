
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { auth } from './auth';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
      const token = req.headers.authorization?.split('Bearer ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      try {
        // Convert Express headers to a Headers object that better-auth expects
        const headers = new Headers();
        Object.entries(req.headers).forEach(([key, value]) => {
          if (value) {
            if (Array.isArray(value)) {
              value.forEach(v => headers.append(key, v));
            } else {
              headers.append(key, value);
            }
          }
        });
        
        const session = await auth.api.getSession({
          headers,
        })
        if(!session){
          console.log('No session found');
          return res.status(401).json({ message: 'Unauthorized' });
        }
       const tokenFromClient = token.split('.')[0];
       const tokenSeesion = session.session.token;
        if(tokenFromClient !== tokenSeesion){
          return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
    }
  }
