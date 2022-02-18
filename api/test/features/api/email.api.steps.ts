import {Given, Then, When} from '@cucumber/cucumber';  
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai'
import * as request from 'supertest';

import { NoteModel } from '../../../src/domain/models/note.model';
import { NoteService } from '../../../src/domain/services/note.service';
import { NoteRepository } from '../../../src/domain/interfaces/note.repository';
import { AppModule } from '../../../src/exposition/app.module';


Given('An email written to {string} from {string} with title {string} containing a note', function (to: string, from: string, title: string) {
    // Write code here that turns the phrase above into concrete actions
    this.payload = {"from":from, "to":to, "title":title}
});

When('I submit the email',  async function ()  {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();
  
      const app = moduleFixture.createNestApplication();

      await app.init();
    
    this.emailRequest = request(app.getHttpServer())
        .post('/email')
        .send(this.payload)
});
 
Then('I received a {string} response', function (message: string) {

    this.emailRequest.end((err, res) => {
        expect(res.text).to.equals(message)
    })
    
});


