import { NoteModel } from "./note.model"

export class EmailModel {
    private _from: string
    private _to: string
    private _title: string 
    private _note: NoteModel
   
    constructor(from: string, to: string, title: string, note: NoteModel){
        this._from = from
        this._to = to
        this._title = title
        this._note = note
    }

    public get from(): string {
        return this._from
    }
    public set from(value: string) {
        this._from = value
    }

    public get to(): string {
        return this._to
    }
    public set to(value: string) {
        this._to = value
    }

    public get title(): string {
        return this._title
    }
    public set title(value: string) {
        this._title = value
    }

    public get note(): NoteModel {
        return this._note
    }
    public set note(value: NoteModel) {
        this._note = value
    }

}