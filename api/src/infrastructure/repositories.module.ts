import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteRepositoryAdapter } from './note.repository.adapter';
import { NoteEntity } from '../domain/entities/note.entities';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity])],
  providers: [NoteRepositoryAdapter],
  exports: [NoteEntity],
})
export class RepositoriesModule {}