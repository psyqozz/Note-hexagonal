import { Controller, Post } from '@nestjs/common';
import { NoteModel } from 'src/domain/note.model';
import { NoteService } from '../domain/note.service';

@Controller()
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  createNote(note: NoteModel): void {
    return this.noteService.createNote(note);
  }
}