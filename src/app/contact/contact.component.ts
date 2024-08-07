import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    formInputs = [
    { id: 'userName', label: 'userName', type: 'text', placeholder: 'userName', name: 'userName', value: '' },
    { id: 'userAge', label: 'userAge', type: 'number', placeholder: 'userAge', name: 'userAge', value: '' },
    { id: 'userEmail', label: 'userEmail', type: 'email', placeholder: 'userEmail', name: 'userEmail', value: '' },
    { id: 'userPassword', label: 'userPassword', type: 'text', placeholder: 'userPassword', name: 'userPassword', value: '' }
  ];

}
