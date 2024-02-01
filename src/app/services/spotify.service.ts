import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.development';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
   }

  async initializeUser() {
    if(!!this.user)
      return true;

      const token = localStorage.getItem('token');

    if(!token)
      return false;

    try {

      this.defineAccessToken(token);
      await this.getSpotifyUser();
      return true;

    }catch(ex) {

      return false;

    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    console.log(userInfo);
  }

  getLoginUrl(){
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  getTolkenCallback() {
    console.log(window.location.hash);

    if(!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  defineAccessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  unauthenticated() {
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
