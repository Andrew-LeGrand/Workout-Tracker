import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { ExerciseCreateComponent } from './exercise/exercise-create/exercise-create.component';
import { ExerciseEditComponent } from './exercise/exercise-edit/exercise-edit.component';
import { ExerciseDetailsComponent } from './exercise/exercise-details/exercise-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    ExerciseCreateComponent,
    ExerciseEditComponent,
    ExerciseDetailsComponent,
    NavbarComponent,
    WorkoutsComponent,
    SearchComponent,
    SearchResultsComponent,
    SearchBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
