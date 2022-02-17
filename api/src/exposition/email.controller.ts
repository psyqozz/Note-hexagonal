import { Body, Controller, Post } from '@nestjs/common';
import { EmailModel } from '../domain/email.model';
import { EmailService } from '../domain/email.service';
import { NoteModel } from '../domain/note.model';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  createNote(@Body() email: EmailModel): void {
    return this.emailService.sendMail(new EmailModel(email.from, email.to, email.title, email.note));
  }
}