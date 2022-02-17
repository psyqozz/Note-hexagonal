import { Injectable } from "@nestjs/common";
import { NoteModel } from "src/domain/note.model";
import { NoteRepository } from "src/domain/note.repository";

@Injectable()
export class NoteRepositoryAdapter implements NoteRepository {

    public saveNote(note: NoteModel){
        console.log(note);
    }
}