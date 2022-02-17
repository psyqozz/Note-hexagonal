import { Body, Controller, Post } from '@nestjs/common';
import { NoteModel } from '../domain/note.model';
import { NoteService } from '../domain/note.service';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(@Body() note: NoteModel): void {
    return this.noteService.createNote(new NoteModel(note.author, note.content, note.createdAt));
  }
}