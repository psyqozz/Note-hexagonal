import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../domain/app.service';
import { NoteController } from './note.controller';
import { NoteService } from 'src/domain/note.service';
import { EmailController } from 'src/exposition/email.controller'
import { EmailService } from 'src/domain/email.service';
import { NoteRepositoryAdapter } from 'src/infrastructure/note.repository.adapter';
import { NotificationAdapter } from 'src/infrastructure/notification.adapter';

@Module({
  imports: [],
  controllers: [AppController, NoteController, EmailController],
  providers: [AppService, NoteService, EmailService, NoteRepositoryAdapter, NotificationAdapter],
})
export class AppModule {}
