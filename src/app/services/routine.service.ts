import { GymDay } from '../model/gymDay.model';
import { Exercise } from '../model/exercise.model';

export class RoutineService {
   
    routine: GymDay[];
    routineName: string;
    constructor(){

    }

    buildRoutine(routineName: string, days: number){
        this.routine = GymDay[days];
        this.routineName = routineName;
    }

    getRoutine(){
        return this.routine;
    }

    addExercise(day: number, e: Exercise){
        this.routine[day].addExercise(e);
    }


    deleteExercise(day: number, e: Exercise){
        this.routine[day].deleteExercise(e);
    }

    
}