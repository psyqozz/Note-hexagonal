import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { NoteModel } from '../domain/models/note.model';
import { NoteRepository } from '../domain/interfaces/note.repository';
import { NoteEntity } from '../domain/entities/note.entities';

@Injectable()
export class NoteRepositoryAdapter implements NoteRepository {
  constructor(
    @InjectRepository(NoteEntity)
    private readonly noteEntityRepository: Repository<NoteEntity>,
  ) {}

  public saveNote(note: NoteModel) {
    this.noteEntityRepository.save(note);

    return 'Success';
  }
  public getAll() {
    return this.noteEntityRepository.find();
  }
}
