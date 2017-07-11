import {Component, OnInit} from '@angular/core';
import {MoviedbService} from './moviedb.service';
import {Movies} from './movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public movies: Movies;
  public chosenMovie;

  constructor(private moviedbService: MoviedbService) {
  }

  private getTopMovies() {
    this.moviedbService.getTopMovies().subscribe(response => this.movies = response)
  }

  public handleFormUpdated(value) {
    this.chosenMovie = value;
  }

  ngOnInit() {
    this.getTopMovies();
  }
}
