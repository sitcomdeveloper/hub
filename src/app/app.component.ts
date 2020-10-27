import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autohub';
//   hideElement = true;

// constructor(private router: Router) {
//   this.router.events.subscribe((event) => {
//     if (event instanceof NavigationEnd) {
//       if (event.url === 'index/login') {
//         this.hideElement = true;
//       }  else {
//         this.hideElement = false;
//       }
//     }
//   });
// }
}
