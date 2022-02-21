import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { EmailModel } from '../domain/models/email.model';
import { EmailService } from '../domain/services/email.service';
import { NoteModel } from '../domain/models/note.model';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  createNote(@Body() email: EmailModel, @Res() response: Response): void {
    const statut = this.emailService.sendMail(new EmailModel(email.from, email.to, email.title, email.note));
    response.status(HttpStatus.CREATED).send(statut);
  }
}