import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { LandingComponent } from './landing/landing.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { DayComponent } from './exercise/day/day.component';
import { RoutineService} from './services/routine.service';
import { Routes, RouterModule } from '@angular/router';
import { WorkoutComponent } from './workout/workout.component';

const appRoutes: Routes = [
  { path: 'create', component: ExerciseComponent},
  { path: '', component: LandingComponent},
  { path: 'workout', component: WorkoutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ExerciseComponent,
    DayComponent,
    WorkoutComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
