import { Injectable } from "@nestjs/common";
import { NoteModel } from "../domain/note.model";
import { NoteRepository } from "../domain/note.repository";

@Injectable()
export class NoteRepositoryAdapter implements NoteRepository {

    public saveNote(note: NoteModel){
        console.log(note);
    }
}