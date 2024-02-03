import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent implements OnInit{

  @Input() description = '';

  constructor(

  ){}

  ngOnInit(): void {

  }
}
