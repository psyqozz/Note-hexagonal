import { Body, Controller, Post } from '@nestjs/common';
import { EmailModel } from 'src/domain/email.model';
import { EmailService } from 'src/domain/email.service';
import { NoteModel } from 'src/domain/note.model';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  createNote(@Body() email: EmailModel): void {
    return this.emailService.sendMail(new EmailModel(email.from, email.to, email.title, email.note));
  }
}