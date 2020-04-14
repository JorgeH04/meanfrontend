export class Player {

    constructor(_id = '', name = '', position = '', club = '', salary = 0) {
        this._id = _id;
        this.name = name;
        this.position = position;
        this.club = club;
        this.salary = salary;
    }

    _id: string;
    name: string;
    position: string;
    club: string;
    salary: number;
}