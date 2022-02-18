import { EntityRepository, Repository } from "typeorm";

import { NoteModel } from "../domain/models/note.model"
import { NoteEntity } from "../domain/entities/note.entities";

@EntityRepository(NoteEntity)
export class NoteRepositoryWrapper extends Repository<NoteEntity> {
    saveNote(note: NoteModel){
        return this.createQueryBuilder("note")
            .insert()
            .setParameter("author", note.author)
            .setParameter("content", note.content)
            .setParameter("createdAt", note.createdAt)
            .execute();
    }
}