import { NoteModel } from "./note.model";

export interface NoteRepository {
    saveNote(note: NoteModel)
}