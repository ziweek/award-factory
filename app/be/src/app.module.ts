import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './models/user/user.module';
import { AwardModule } from './models/award/award.module';
import { AuthModule } from './functions/auth/auth.module';

@Module({
  imports: [UserModule, AwardModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
