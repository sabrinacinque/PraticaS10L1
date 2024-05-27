import { Component, Input } from '@angular/core';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() post!: iPost; // Ricevi l'oggetto post come input

  formVisible: boolean = false; // Variabile per gestire la visibilità del form

  toggleForm() {
    this.formVisible = !this.formVisible; // Alterna lo stato di formVisible
  }
}

