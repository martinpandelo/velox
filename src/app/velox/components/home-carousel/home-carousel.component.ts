import { Component } from '@angular/core';
import { ItemsCarousel } from '../../interfaces/items-carousel.interface';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'velox-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {

  items: ItemsCarousel[] = [
    {
      image: 'assets/slide/slide_1.jpg',
      imageMobile: 'assets/slide/slide_1-mobile.jpg',
      caption: 'la mejor experiencia en reparación de vehículos premium del mercado',
    }
  ];

  showNavigationArrows = false;
	showNavigationIndicators = false;

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = false;
		config.showNavigationIndicators = false;
	}

}
