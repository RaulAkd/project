import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserController} from "./usuario.controller";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

@Module({
    controllers: [UserController],
})
export class AppModule {}
