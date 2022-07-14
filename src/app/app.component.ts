/*
 * Title: app.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/14
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment = 'Welcome to In-N-Out-Books';
}
