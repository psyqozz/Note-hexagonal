import { NoteEntity } from "../entities/note.entities";
import { NoteModel } from "../models/note.model";

export interface NoteRepository {
    saveNote(note: NoteModel): string
    getAll(): Promise<NoteEntity[]>
}