import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtist } from '../../interfaces/IArtist';
import { newArtist } from '../../Common/factories';

@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.scss'
})
export class TopArtistsComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  topArtist: IArtist = newArtist();

  ngOnInit(): void {
    this.getArtist();
  }

  async getArtist() {
    const artists = await this.spotifyService.getTopArtists(1);

    if(!!artists) {
      this.topArtist = artists.pop();
    }
  }
}
