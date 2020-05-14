import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  constructor() { }

  getMusicRelease(){
    const api_url = "https://platzi-music-api.now.sh/browse/new-releases"
    return fetch(api_url).then(
      response => response.json());
  }
}
