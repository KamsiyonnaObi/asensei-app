import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(page: String) {
    this.router.navigate([page]);
  }
}
