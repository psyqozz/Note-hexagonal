import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { NoteModel } from '../domain/note.model';
import { NoteService } from '../domain/note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(@Body() note: NoteModel, @Res() response: Response): string|void {
    const statut = this.noteService.createNote(new NoteModel(note.author, note.content, note.createdAt));
    response.status(HttpStatus.CREATED).send(statut);
  }
}