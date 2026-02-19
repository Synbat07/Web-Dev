import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <nav>
      <a href="/">Home</a> |
      <a href="/user">User</a>
    </nav>

    <router-outlet />
  `,
})
export class App {}
