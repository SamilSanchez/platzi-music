import { Component } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists = [{}, {}, {}, {}, {}, {}, {}, {}]
  songs: any[] = []
  albums: any[] = []
  slideOps = {
    inititalSlide: 2,
    slidesPerView: 4,
    centeredSlide: true,
    speed: 400
  }

  constructor(private musicSservice: PlatziMusicService) {}

  ionViewDidEnter(){
    this.musicSservice.getMusicRelease().then(newReleases => {
      const new_releases =  newReleases.albums.items
      this.songs = new_releases.filter(e=>e.album_type=='single')
      this.albums = new_releases.filter(e=>e.album_type=='album')
    });
  }
}
