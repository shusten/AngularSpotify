import { Component } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../interfaces/IUser';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-user-footer',
  templateUrl: './user-footer.component.html',
  styleUrl: './user-footer.component.scss'
})
export class UserFooterComponent {

  logOutIcon = faSignOut;
  user: IUser = null;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

  logout() {
    this.spotifyService.logout();
  }

}
