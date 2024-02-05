import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private spotifyService: SpotifyService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.verifyTokenCallback();
  }

  verifyTokenCallback() {
   const token = this.spotifyService.getTolkenCallback();
   if(!!token) {
    this.spotifyService.defineAccessToken(token);
    this.router.navigate(['/player/home']);
   }
  }

  openLoginPage() {
   window.location.href = this.spotifyService.getLoginUrl();
  }
}
