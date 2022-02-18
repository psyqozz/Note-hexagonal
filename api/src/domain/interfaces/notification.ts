import { EmailModel } from "../models/email.model";

export interface Notification {

    sendMail(email: EmailModel);
}