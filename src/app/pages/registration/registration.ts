import { Component } from '@angular/core';
import { Spende } from '../../models/spende';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common'; //Textfelder testen

@Component({
  imports: [FormsModule, JsonPipe],
  selector: 'app-registration',
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})

export class Registration {
  spende = new Spende();
}
