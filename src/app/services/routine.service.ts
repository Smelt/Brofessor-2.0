
import { GymDay } from '../model/gymDay.model';
import { Exercise } from '../model/exercise.model';
import { Plan } from '../model/plan.model';
export class RoutineService {

    plan: Plan;

    constructor() {
        this.plan = new Plan('', 0);
    }

    buildRoutine(routineName: string, days: number) {
        this.plan = new Plan(routineName, days);
    }

    getRoutine() {
        return this.plan.routine;
    }

    getExercise(selectedDay: number) {
      return this.plan.routine[selectedDay].getExercise();
    }




}
