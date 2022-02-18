import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from '../domain/services/app.service';
import { NoteController } from './note.controller';
import { NoteService } from '../domain/services/note.service';
import { NoteEntity } from '../domain/entities/note.entities'
import { EmailController } from '../exposition/email.controller'
import { EmailService } from '../domain/services/email.service';
import { NoteRepositoryAdapter } from '../infrastructure/note.repository.adapter';
import { NotificationAdapter } from '../infrastructure/notification.adapter';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [NoteEntity],
    synchronize: true,
  })],
  controllers: [AppController, NoteController, EmailController],
  providers: [AppService, NoteService, EmailService, NoteRepositoryAdapter, NotificationAdapter],
})

export class AppModule {}
