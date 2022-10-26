import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Category } from './models/movies';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sticky = false;
  categories: Category[];

  sliderConfig = {
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    autoplay: false,
  };

  @ViewChild('stickHeader') header: ElementRef;

  constructor(private movieService: MovieService) {}

  async ngOnInit(): Promise<void> {
    var response = await this.movieService.getCategories().toPromise();
    this.categories = response;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
