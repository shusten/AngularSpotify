import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes),
  ],
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    MenuButtonComponent,
  ]
})
export class PlayerModule { }
