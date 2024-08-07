import { Block } from '@angular/compiler';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar:any = document.querySelector('.navbar');
    if (window.scrollY  > 35) {
      navbar.style.paddingBlock = '8px';
    } else {
      navbar.style.paddingBlock = '24px'; 
    }
  }
}
