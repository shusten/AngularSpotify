import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent {

  selectedMenuButton = '';

  homeIcon      =  faHome;
  searchIcon    =  faSearch;
  artistIcon    =  faGuitar;
  playlistIcon  =  faMusic;

  buttonClicked(button: string) {
    this.selectedMenuButton = button;
  }

}
