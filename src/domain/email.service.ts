import { Injectable } from "@nestjs/common";
import { NotificationAdapter } from "../infrastructure/notification.adapter";
import { EmailModel } from "./email.model";

@Injectable()
export class EmailService {

    private notificationAdapter;

    constructor(notificationAdapter: NotificationAdapter){
        this.notificationAdapter =  notificationAdapter;
    }
    sendMail(email: EmailModel){
        this.notificationAdapter.sendMail(email);
    }
}