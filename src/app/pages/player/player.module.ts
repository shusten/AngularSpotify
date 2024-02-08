import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserFooterComponent } from '../../components/user-footer/user-footer.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistsComponent } from '../../components/top-artists/top-artists.component';
import { RightPanelComponent } from '../../components/right-panel/right-panel.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRoutes),
  ],
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    RightPanelComponent,
    MenuButtonComponent,
    UserFooterComponent,
    HomeComponent,
    TopArtistsComponent,
  ]
})
export class PlayerModule { }
