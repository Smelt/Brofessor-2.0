import { Component, OnInit } from '@angular/core';
import { RoutineService} from '../services/routine.service';
import { GymDay } from '../model/gymDay.model';
import { Plan } from '../model/plan.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  public routine: GymDay[];
  public routineName: string;
  public days: number;

  constructor(private routineService: RoutineService) {
      this.routine = routineService.getRoutine();
      this.routineName = '';
      this.days = 0;
   }



  ngOnInit() {

  }

  buildWorkOut() {
    this.routineService.buildRoutine(this.routineName, this.days);
    this.routine = this.routineService.getRoutine();
  }



}
