import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOps = {
    inititalSlide: 2,
    slidesPerView: 4,
    centeredSlide: true,
    speed: 400
  }

  constructor() {}

  artists = [{}, {}, {}, {}, {}, {}, {}, {}]

}
