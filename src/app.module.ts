import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './auth/auth.middleware';
import { ParamModule } from './param/param.module';
import { ClientModule } from './client/client.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { AchatModule } from './achat/achat.module';
import { VenteModule } from './vente/vente.module';
import { FamilleModule } from './famille/famille.module';
import { UniteModule } from './unite/unite.module';
import { ArticleModule } from './article/article.module';
import { FactureModule } from './facture/facture.module';
import { PackModule } from './pack/pack.module';
import { PaymentModule } from './payment/payment.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
      
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    ParamModule,
    ClientModule,
    FournisseurModule,
    AchatModule,
    VenteModule,
    FamilleModule,
    UniteModule,
    ArticleModule,
    FactureModule,
    PackModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'user/login', method: RequestMethod.POST })
      .forRoutes('*');
  }
}
