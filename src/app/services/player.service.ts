import { Injectable } from '@angular/core';
import { IMusic } from '../interfaces/IMusics';
import { newMusic } from '../Common/factories';
import { BehaviorSubject } from 'rxjs';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newMusic());

  constructor(
    private spotifyService: SpotifyService
    ) {
      this.getCurrentMusic();
    }

  async getCurrentMusic() {
    const music = await this.spotifyService.getCurrentMusic();
    this.setCurrentMusic(music);
  }

  setCurrentMusic(music: IMusic) {
    this.currentMusic.next(music)
  }
}
