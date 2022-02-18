import { NoteModel } from "../models/note.model";

export interface NoteRepository {
    saveNote(note: NoteModel)
}