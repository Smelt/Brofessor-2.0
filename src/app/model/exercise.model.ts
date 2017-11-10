export class Exercise {
    
    public name: string;
    public reps: number;
    public sets: number;
    public weight: number;


    constructor(name: string, reps: number, sets: number, weight: number){
        this.name = name;
        this.reps = reps;
        this.sets = sets;
        this.weight = weight;
    }
    
    
}