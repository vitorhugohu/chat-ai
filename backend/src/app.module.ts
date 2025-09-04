import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [UserModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
