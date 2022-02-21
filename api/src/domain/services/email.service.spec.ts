import { EmailModel } from '../models/email.model';
import { EmailService } from './email.service'
import { NoteModel } from '../models/note.model';
import { Notification } from '../interfaces/notification';

const completeEmail = new EmailModel('me', 'you', 'title', new NoteModel("yes",'pog', new Date()))

describe("Email services", ()=> {
    const notification: Notification = {
        sendMail: (email: EmailModel) => {
            return "Success";
        }
    };
    const emailService = new EmailService(notification)

    it("Should send mail successfully", () => {
        expect(emailService.sendMail(completeEmail)).toBe('Success')
    });
})