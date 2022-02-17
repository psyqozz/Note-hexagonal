export class NoteModel {
    private _author: string;  
    private _content: string;
    private _createdAt: Date;
    
    constructor(author: string, content: string, createdAt: Date ){
        this._author = author;
        this._content = content;
        this._createdAt = createdAt;
    }

    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }
    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    verify(): boolean{
        if(!this.content || !this.author || !this.createdAt){
            return false;
        }

        return true;
    }
}