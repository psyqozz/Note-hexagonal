import { EmailModel } from "./email.model";

export interface Notification {

    sendMail(email: EmailModel);
}