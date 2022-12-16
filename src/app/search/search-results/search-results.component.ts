import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/exercise/exercise.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  exerciseResults: Exercise[] = [];

  constructor() {}

  ngOnInit(): void {}
}

// need to work on the exercise component to create what an exercise looks like
