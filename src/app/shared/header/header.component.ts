// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

//   // change
//   menuOpen = false;

// toggleMenu() {
//   this.menuOpen = !this.menuOpen;
// }

// closeMenu() {
//   this.menuOpen = false;
// }

// }

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() menuState = new EventEmitter<boolean>();

  menuOpen = false;

  toggleMenu() {
  this.menuOpen = !this.menuOpen;
  this.menuState.emit(this.menuOpen);

  if (this.menuOpen) {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
}

closeMenu() {
  this.menuOpen = false;
  this.menuState.emit(false);
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
}

}
