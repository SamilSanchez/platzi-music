import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  }

  slides = [{
    'title': 'Escucha tu música',
    'subTitle': 'EN CUALQUIER LUGAR',
    'description': ' Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier \
    momento, a todas horas.',
    'icon': 'play'
    },{
    'title': 'Disfruta de nuetro reproductor',
    'subTitle': 'DE VIDEOS INCREIBLES',
    'description': ' Entra al modo video de nuestro reproductor y obten acceso a clips, \
     documentales y making offs increibles de tu artista favorito.',
    'icon': 'bicycle'
    },{
    'title': 'Accede al exclusivo',
    'subTitle': 'MODO DEPORTE',
    'description': 'Crea una playlist basada en tu actividad física. <br/> \
    Ten reportes y acceso a lo que necesites, integrado con GPS!',
    'icon': 'videocam'
    }
  ]

  constructor(private router:Router, private storage: Storage) { }

  finish() {
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }

}
