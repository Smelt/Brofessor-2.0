import { Exercise } from './exercise.model';

export class GymDay {


  workout: Exercise[];
  public letterDay: string;
  public numDay: number;



  constructor(letterDay: string, numDay: number) {
    this.workout = [];
    this.letterDay = letterDay;
    this.numDay = numDay;
  }

  static checkEqual(a: Exercise, b: Exercise) {
    if (a.name === b.name && a.reps === b.reps && a.sets === b.sets) {
      return true;
    }
    return false;
  }

  addExercise(exercise: Exercise) {
    this.workout.push(exercise);
  }

  deleteExercise(selected: Exercise) {
    for (let i = 0; i < this.workout.length; i++) {
      if (GymDay.checkEqual(this.workout[i], selected)) {
        this.workout.splice(i, 1);
      }
    }
  }

  getExercise(){
    return this.workout;
  }

}
