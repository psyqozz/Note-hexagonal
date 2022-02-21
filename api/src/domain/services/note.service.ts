import { Injectable } from '@nestjs/common'
import { NoteRepositoryAdapter } from '../../infrastructure/note.repository.adapter'
import { NoteModel } from '../models/note.model'

@Injectable()
export class NoteService {
    private noteRepositoryAdapter: NoteRepositoryAdapter;

    constructor(noteAdapter: NoteRepositoryAdapter){
        this.noteRepositoryAdapter = noteAdapter;
    }

    createNote(note: NoteModel){
        const isUseable = note.verify()

        if(!isUseable){
            return "Cannot create empty note"
        }

        return this.noteRepositoryAdapter.saveNote(note);
    }
    getAll() {
        return this.noteRepositoryAdapter.getAll();
    }

    
}