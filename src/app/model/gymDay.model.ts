import { Exercise } from './exercise.model';

export class GymDay {


    workout: Exercise[];

    constructor(){
        this.workout = new Exercise[0];
    }

    addExercise(exercise: Exercise){
        this.workout.push(exercise);
    }

    deleteExercise(selected: Exercise){
        for(var i = 0; i < this.workout.length; i++){
            if(GymDay.checkEqual(this.workout[i], selected)){
                this.workout.splice(i,1);
            }
        }
    }

    static checkEqual(a: Exercise, b: Exercise){
        if(a.name == b.name && a.reps == b.reps && a.sets == b.sets){
            return true;
        }
        return false;
    }



}