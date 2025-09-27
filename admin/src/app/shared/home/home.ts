import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [MaterialModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
