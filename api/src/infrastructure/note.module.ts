import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteEntity } from '../domain/entities/note.entities';

@Module({
  imports: [TypeOrmModule.forFeature([NoteEntity])],
  exports: [TypeOrmModule],
})
export class NoteModule {}
