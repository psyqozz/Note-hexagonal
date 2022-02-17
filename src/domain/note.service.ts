import { NoteModel } from './note.model'

export class NoteService {
    createNote(note: NoteModel){
        const isUseable = note.verify()
    }
}