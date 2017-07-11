import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviedbService {
  private apiKey = '1c27e642d8cedef632716f85732ec043';

  constructor(private http: Http) {
  }

  getTopMovies(): Observable<['']> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`)
      .map((response) => response.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
