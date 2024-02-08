import { Component, OnInit } from '@angular/core';
import { IMusic } from '../../interfaces/IMusics';
import { SpotifyService } from '../../services/spotify.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  musics: IMusic[] = []
  playIcon = faPlay;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.getMusics();
  }

  async getMusics() {
    this.musics = await this.spotifyService.getMusics();
    console.log(this.musics);
  }

  getArtists(music: IMusic) {
    return music.artists.map(artist => artist.name).join(', ');
  }
}
