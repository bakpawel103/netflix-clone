import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Category } from '../../models/movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() category: Category;
  @Input() sliderConfig;

  constructor(private movieService: MovieService) {}

  async ngOnInit(): Promise<void> {
    var moviesResponse = await this.movieService
      .getMovies(this.category.id)
      .toPromise();

    this.category.movies = moviesResponse;

    if (this.category.movies.length <= this.sliderConfig.slidesToShow - 1) {
      this.sliderConfig.slidesToShow = this.category.movies.length - 1;
    }

    for (var i = 0; i < this.category?.movies?.length; i++) {
      var movieResponse = await this.movieService
        .getMovie(this.category.movies[i].id)
        .toPromise();

      this.category.movies[i].content = movieResponse;
    }
  }

  max(x, y): Number {
    return Math.max(x, y);
  }
}
