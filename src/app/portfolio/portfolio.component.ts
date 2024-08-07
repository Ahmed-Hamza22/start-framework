import { Component, HostListener } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  isImageVisible: boolean = false;
  selectedImageSrc: string =``;

  images = [
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ];

  onLayerClick(event: MouseEvent) {
    const layer = event.currentTarget as HTMLElement;
    const img = layer.previousElementSibling as HTMLImageElement;
    this.selectedImageSrc = img.src;
    this.isImageVisible = true;
    console.log(this.selectedImageSrc);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if(target.classList.contains('position-fixed')){
      this.isImageVisible = false;
    }
  }


}




