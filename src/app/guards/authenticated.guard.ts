import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

export const authenticatedGuard: CanMatchFn = (route, segments) => {

  const token = localStorage.getItem('token');
  const spotifyService = inject(SpotifyService);

  if(!token){
    return spotifyService.unauthenticated()
  }

  return new Promise((res) => {
    const createdUser = spotifyService.initializeUser();
    if (createdUser)
      res(true);
    else
      res(spotifyService.unauthenticated())
  })

};
