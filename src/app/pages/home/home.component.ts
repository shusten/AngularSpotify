import { Component, OnInit } from '@angular/core';
import { IMusic } from '../../interfaces/IMusics';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  musics: IMusic[] = []

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit(): void {
    this.getMusics();
  }

  async getMusics() {
    this.musics = await this.spotifyService.getMusics();
    console.log(this.musics);
  }

}
