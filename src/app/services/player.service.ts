import { Injectable } from '@angular/core';
import { IMusic } from '../interfaces/IMusics';
import { newMusic } from '../Common/factories';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  currentMusic = new BehaviorSubject<IMusic>(newMusic());

  constructor() { }



}
