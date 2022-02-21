import { Injectable } from '@nestjs/common';
import { EmailModel } from '../domain/models/email.model';
import { Notification } from '../domain/interfaces/notification'

@Injectable()
export class NotificationAdapter implements Notification{

    public sendMail(email: EmailModel){
        console.log(email);
        return "Success";
    }
}