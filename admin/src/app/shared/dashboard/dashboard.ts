import { Component, inject, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../material/material-module';
import { DrawerMenu } from "../drawer-menu/drawer-menu";
import { MatDrawer } from '@angular/material/sidenav';
import { ScreemSize } from '../../services/screem-size';
import { SettingsMenu } from "../../settings-menu/settings-menu";


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, MaterialModule, DrawerMenu, SettingsMenu],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
  @ViewChild('drawer') drawer!: MatDrawer

  private readonly ScreemSizeService = inject(ScreemSize)

  isMobile =this.ScreemSizeService.isMobile

  onNavigation(){
    if(this.isMobile()){
      this.drawer.close
    }
  }
}
