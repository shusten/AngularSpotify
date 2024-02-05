import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from '../../interfaces/IPlaylist';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent implements OnInit {

  selectedMenuButton = '';

  playlists: IPlaylist[] = [];

  homeIcon      =  faHome;
  searchIcon    =  faSearch;
  artistIcon    =  faGuitar;
  playlistIcon  =  faMusic;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  buttonClicked(button: string) {
    this.selectedMenuButton = button;
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getUserPlaylist();
  }

}
