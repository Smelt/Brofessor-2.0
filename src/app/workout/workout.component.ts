import { Component, OnInit } from '@angular/core';
import { Exercise } from '../model/exercise.model';
import { Plan } from '../model/plan.model';
import { RoutineService } from '../services/routine.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  exercises: Exercise[];
  daySelected: number;
  plan: Plan;

  constructor(private routineService: RoutineService) { }

  ngOnInit() {
    this.plan = this.routineService.plan;
  }

}
