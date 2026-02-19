import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Profile Form</h2>

    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <label>
        Name
        <input type="text" formControlName="name" />
      </label>

      <label>
        Email
        <input type="email" formControlName="email" />
      </label>

      <button type="submit">Submit</button>
    </form>

    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `
})
export class App {

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name +
      ' | ' +
      this.profileForm.value.email
    );
  }

}
