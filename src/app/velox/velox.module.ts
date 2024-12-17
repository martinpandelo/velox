import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { SharedModule } from '../shared/shared.module';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeCarouselComponent,
    MarcasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule,
    CarouselModule,
  ]
})
export class VeloxModule { }
