import {Client} from "./client";
import {Driver} from "./driver";
import {Conversation} from "./conversation";
import {User} from "./user";

export class Message{
    fromLogin?:string;
    message?:Conversation[];
    date?:Date;
    sender?:User;
    receiver?:User;
}
