import { Injectable } from '@nestjs/common'
import { NoteRepositoryAdapter } from '../infrastructure/note.repository.adapter'
import { NoteModel } from './note.model'

@Injectable()
export class NoteService {
    private noteRepositoryAdapter: NoteRepositoryAdapter;

    constructor(noteAdapter: NoteRepositoryAdapter){
        this.noteRepositoryAdapter = noteAdapter;
    }

    createNote(note: NoteModel){
        const isUseable = note.verify()

        if(!isUseable){
            throw new Error("Cannot create empty note")
        }

        return this.noteRepositoryAdapter.saveNote(note);
    }
}