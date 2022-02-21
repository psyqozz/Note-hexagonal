import { NoteService } from './note.service'
import { NoteModel } from '../models/note.model';
import { NoteRepository } from '../interfaces/note.repository';

const completeNote = new NoteModel("yes",'pog', new Date())

describe("Note services", ()=> {
    const noteRepository: NoteRepository = {
        saveNote: (note: NoteModel) => {
            return "Success";
        }
    };
    
    const noteService = new NoteService(noteRepository)

    it("Should send mail successfully", () => {
        expect(noteService.createNote(completeNote)).toBe('Success')
    });
})