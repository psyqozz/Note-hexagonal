import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { NoteModel } from '../domain/models/note.model';
import { NoteService } from '../domain/services/note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(@Body() note: NoteModel, @Res() response: Response): string|void {
    const status = this.noteService.createNote(new NoteModel(note.author, note.content, note.createdAt));
    response.status(HttpStatus.CREATED).send(status);
  }
}