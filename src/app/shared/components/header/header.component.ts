import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public altLogo: string = 'Velox postventa premium';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      document.getElementById('navigation')!.classList.add('fixed');
    } else {
      document.getElementById('navigation')!.classList.remove('fixed');
    }

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 800) {
      document.getElementById('btnUp')!.classList.add('mostrar');
    } else {
      document.getElementById('btnUp')!.classList.remove('mostrar');
    }
  }

}
