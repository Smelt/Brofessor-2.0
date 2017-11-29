export class Exercise {

    public name: string;
    public reps: number;
    public sets: number;
    public weight: number;
    public rest: number;
    public day: number;

    constructor(name: string, reps: number, sets: number, weight: number, rest: number, day: number) {
        this.name = name;
        this.reps = reps;
        this.sets = sets;
        this.weight = weight;
        this.rest = rest;
        this.day = day;
    }


}
