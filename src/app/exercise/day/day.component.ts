import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from '../../model/exercise.model';
import { RoutineService} from '../../services/routine.service';
@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  exercises: Exercise[];
  @Input() daySelected: number;
  exerciseName: string;
  exerciseReps: number;
  exerciseSets: number;
  exerciseWeight: number;
  exerciseRest: number;


  constructor(private routineService: RoutineService) {

   }

  ngOnInit() {
    this.exercises = this.routineService.getExercise(this.daySelected);
    console.log(this.daySelected);
  }

  addExercise() {
    const e = new Exercise(this.exerciseName, this.exerciseReps, this.exerciseSets, this.exerciseWeight, this.exerciseSets
      , this.daySelected);
    this.routineService.plan.addExercise(this.daySelected, e);
  }

}
