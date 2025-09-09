import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-drawer-menu',
  imports: [MaterialModule, RouterLink, RouterLinkActive],
  templateUrl: './drawer-menu.html',
  styleUrl: './drawer-menu.scss'
})
export class DrawerMenu {
  @Input() isMobile = false;
  @Output() itemClicked = new EventEmitter<void> 

  subMenuOpen = signal<string|null>(null)

  toggleSubmenu (menu:string){
    this.subMenuOpen.set(this.subMenuOpen()===menu?null:menu)
  }
  handleItemClick(){
    if (this.isMobile){
      this.itemClicked.emit();
    }
  }

}
