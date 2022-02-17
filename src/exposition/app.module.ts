import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../domain/app.service';
import { NoteController } from './note.controller';
import { NoteService } from '../domain/note.service';
import { EmailController } from '../exposition/email.controller'
import { EmailService } from '../domain/email.service';
import { NoteRepositoryAdapter } from '../infrastructure/note.repository.adapter';
import { NotificationAdapter } from '../infrastructure/notification.adapter';

@Module({
  imports: [],
  controllers: [AppController, NoteController, EmailController],
  providers: [AppService, NoteService, EmailService, NoteRepositoryAdapter, NotificationAdapter],
})
export class AppModule {}
