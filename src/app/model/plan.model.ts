
import { GymDay } from '../model/gymDay.model';
import { Exercise } from '../model/exercise.model';

export class Plan {

  static letterdays = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  routine: GymDay[];
  name: string;


  constructor(name: string, days: number) {
    this.routine = new Array();
    for (let i = 0; i < days; i++) {
      this.routine.push(new GymDay(Plan.letterdays[i] , i));
    }
    this.name = name;
  }

  addExercise(day: number, e: Exercise) {
    this.routine[day].addExercise(e);
  }


  deleteExercise(day: number, e: Exercise) {
    this.routine[day].deleteExercise(e);
  }

}
