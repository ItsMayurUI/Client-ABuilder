import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aclinnt-builder-site';

  menuOpen = false;

onMenuStateChange(state: boolean) {
  this.menuOpen = state;
}

}

