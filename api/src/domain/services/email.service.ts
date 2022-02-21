import { Injectable } from "@nestjs/common";
import { NotificationAdapter } from "../../infrastructure/notification.adapter";
import { EmailModel } from "../models/email.model";

@Injectable()
export class EmailService {

    private notificationAdapter;

    constructor(notificationAdapter: NotificationAdapter){
        this.notificationAdapter =  notificationAdapter;
    }
    sendMail(email: EmailModel){
        
        return this.notificationAdapter.sendMail(email);
    }
    
}