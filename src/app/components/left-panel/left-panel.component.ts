import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from '../../interfaces/IPlaylist';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

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

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.getPlaylists();
  }

  buttonClicked(button: string) {
    this.selectedMenuButton = button;
    this.router.navigateByUrl('player/home');
  }

  async getPlaylists() {
    this.playlists = await this.spotifyService.getUserPlaylist();
  }

}
