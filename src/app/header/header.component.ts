import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  toggleNav() {
    let el = document.getElementById('navbarSupportedContent');
    el.classList.toggle('show');
  }

}
