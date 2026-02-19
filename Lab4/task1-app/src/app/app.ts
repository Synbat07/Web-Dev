import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="profileForm">
      
      <input 
        type="text" 
        formControlName="name" 
        name="name" 
        placeholder="Name" 
      />

      <input 
        type="email" 
        formControlName="email" 
        name="email" 
        placeholder="Email" 
      />

      <button 
        type="submit" 
        [disabled]="!profileForm.valid">
        Submit
      </button>

    </form>
  `,
})
export class App {

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

}
