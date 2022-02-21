import {Given, Then, When} from '@cucumber/cucumber';  
import { Notification } from '../../../src/domain/interfaces/notification';
import { expect } from 'chai'
import { EmailModel } from '../../../src/domain/models/email.model';
import { EmailService } from '../../../src/domain/services/email.service';

Given('An email written to {string} from {string} with title {string} containing a note', function (to: string, from: string, title: string) {
    // Write code here that turns the phrase above into concrete actions
    this.emailModel = new EmailModel(to, from, title, null);
});

When('I send the email', function () {
    const notification: Notification = {
        sendMail: (email: EmailModel) => {
            return "Success";
        }
    };
    this.emailService = new EmailService(notification);
    // Write code here that turns the phrase above into concrete actions
});
 
Then('I received a {string} status', function (message: string) {
    expect(this.emailService.sendMail(this.emailModel)).to.equals(message);
});