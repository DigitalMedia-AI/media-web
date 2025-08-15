import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MaterialModule } from "../material/material-module";

@Component({
  selector: 'app-header',
  imports: [MatIcon, RouterLink, MaterialModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
