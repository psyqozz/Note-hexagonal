import {Given, Then, When} from '@cucumber/cucumber';  
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai'
import * as request from 'supertest';

import { NoteModel } from '../../../src/domain/note.model';
import { NoteService } from '../../../src/domain/note.service';
import { NoteRepository } from '../../../src/domain/note.repository';
import { AppModule } from '../../../src/exposition/app.module';


Given('Writing a note by {string} with {string}', function (author: string, content: string) {
    // Write code here that turns the phrase above into concrete actions
    this.payload = {"author": author, "content": content, "createdAt": new Date()}
});

When('I submit the note',  async function ()  {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      const app = moduleFixture.createNestApplication();

      await app.init();
    
    this.noteRequest = request(app.getHttpServer())
        .post('/note')
        .send(this.payload)
});
 
Then('I received a {string} message', function (message: string) {

    this.noteRequest.end((err, res) => {
        expect(res.text).to.equals(message)
    })
    
});


