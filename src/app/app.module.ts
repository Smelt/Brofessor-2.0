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

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ExerciseComponent,
    DayComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    MaterialModule,
  ],
  providers: [RoutineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
