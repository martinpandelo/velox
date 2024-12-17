import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ItemsSlide } from '../../interfaces/items-slide.interface';

@Component({
  selector: 'velox-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss'
})
export class MarcasComponent {

  marcasOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 4
      },
      740: {
        items: 6
      },
      940: {
        items: 8
      }
    },
    nav: false
  }

  slidesStore: ItemsSlide[] = [
    {
      id: '1',
      src: 'assets/marcas/audi.svg',
      alt: 'Audi',
      title: 'Audi',
    },
    {
      id: '2',
      src: 'assets/marcas/bmw.svg',
      alt: 'bmw',
      title: 'bmw',
    },
    {
      id: '3',
      src: 'assets/marcas/volvo.svg',
      alt: 'Volvo',
      title: 'Volvo',
    },
    {
      id: '4',
      src: 'assets/marcas/mini.svg',
      alt: 'Mini',
      title: 'Mini',
    },
    {
      id: '5',
      src: 'assets/marcas/mercedes.svg',
      alt: 'Mercedes',
      title: 'Mercedes',
    },
    {
      id: '6',
      src: 'assets/marcas/smart.svg',
      alt: 'Smart',
      title: 'Smart',
    },
    {
      id: '7',
      src: 'assets/marcas/jeep.svg',
      alt: 'Jeep',
      title: 'Jeep',
    },
    {
      id: '8',
      src: 'assets/marcas/alfa-romeo.svg',
      alt: 'Alfa Romeo',
      title: 'Alfa Romeo',
    },
    {
      id: '9',
      src: 'assets/marcas/honda.svg',
      alt: 'Honda',
      title: 'Honda',
    },
    {
      id: '10',
      src: 'assets/marcas/land-rover.svg',
      alt: 'Land Rover',
      title: 'Land Rover',
    },
    {
      id: '11',
      src: 'assets/marcas/porsche.svg',
      alt: 'Porsche',
      title: 'Porsche',
    },
    {
      id: '12',
      src: 'assets/marcas/jaguar.svg',
      alt: 'Jaguar',
      title: 'Jaguar',
    },
  ];
}
