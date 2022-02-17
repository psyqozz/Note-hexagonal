import {Given, Then, When} from 'cucumber';  
import { NoteModel } from '../../../src/domain/note.model';
import { NoteService } from '../../../src/domain/note.service';
import { NoteRepository } from '../../../src/domain/note.repository';
import { expect } from 'chai'


Given('Writing a note by {string} with {string}', function (author: string, content: string) {
    // Write code here that turns the phrase above into concrete actions
    this.noteModel = new NoteModel(author, content, new Date());
});

When('I save the note', function () {
    const noteRepository: NoteRepository = {
        saveNote: (note: NoteModel) => {
            return "Success";
        }
    };
    this.noteService = new NoteService(noteRepository);
    // Write code here that turns the phrase above into concrete actions
});
 
Then('I received a {string} message', function (message: string) {
    expect(this.noteService.createNote(this.noteModel)).to.equals(message);
});