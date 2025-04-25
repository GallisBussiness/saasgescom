import {
  Module,
  NestModule,
  MiddlewareConsumer
} from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ParamModule } from './param/param.module';
import { ClientModule } from './client/client.module';
import { FournisseurModule } from './fournisseur/fournisseur.module';
import { AchatModule } from './achat/achat.module';
import { VenteModule } from './vente/vente.module';
import { FamilleModule } from './famille/famille.module';
import { UniteModule } from './unite/unite.module';
import { ArticleModule } from './article/article.module';
import { PackModule } from './pack/pack.module';
import { PaymentModule } from './payment/payment.module';
import { FactureAchatModule } from './facture_achat/facture_achat.module';
import { FactureVenteModule } from './facture_vente/facture_vente.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './utils/journal-interceptors';
// import { JournalModule } from './journal/journal.module';
import { InventoryModule } from './inventory/inventory.module';
import { PaiementClientModule } from './paiement-client/paiement-client.module';
import { PaiementFournisseurModule } from './paiement-fournisseur/paiement-fournisseur.module';
import { DepotModule } from './depot/depot.module';
import { AuthMiddleware } from 'lib/auth-middleware';

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
    ParamModule,
    ClientModule,
    FournisseurModule,
    AchatModule,
    VenteModule,
    FamilleModule,
    UniteModule,
    ArticleModule,
    PackModule,
    PaymentModule,
    FactureAchatModule,
    FactureVenteModule,
    // JournalModule,
    InventoryModule,
    PaiementClientModule,
    PaiementFournisseurModule,
    DepotModule
  ],
  controllers: [],
  providers: [
    // { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor   },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('/api/auth/*')
      .exclude('/payment/ipn')
      .forRoutes('*');
  }
}
