import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.development';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';
import { setSpotfyTrackMusicData, setSpotifyArtistData, setSpotifyPlaylistData, setUserProfileData } from '../Common/spotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';
import { IArtist } from '../interfaces/IArtist';
import { IMusic } from '../interfaces/IMusics';

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
      return !!this.user;

    }catch(ex) {

      return false;

    }
  }

  async getSpotifyUser() {
    const userInfo = await this.spotifyApi.getMe();
    this.user = setUserProfileData(userInfo);
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

  async getUserPlaylist(offset = 0, limit = 50): Promise<IPlaylist[]> {
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, { offset, limit});
    return playlists.items.map(setSpotifyPlaylistData);
  }

  async getTopArtists(limit = 10): Promise<IArtist[]> {
    const artists = await this.spotifyApi.getMyTopArtists({ limit });
    return artists.items.map(setSpotifyArtistData);
  }

  async getMusics(offset = 0, limit = 50): Promise<IMusic[]> {
    const musics = await this.spotifyApi.getMySavedTracks({ offset, limit });
    return musics.items.map(data => setSpotfyTrackMusicData(data.track));
  }

  async playMusic(musicId: string) {
    await this.spotifyApi.queue(musicId);
    await this.spotifyApi.skipToNext();
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
