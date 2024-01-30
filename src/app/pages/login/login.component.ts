import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.verifyTokenCallback();
  }

  verifyTokenCallback() {
   const token = this.spotifyService.getTolkenCallback();
  }

  openLoginPage() {
   window.location.href = this.spotifyService.getLoginUrl();
  }
}
