import {Component, signal} from '@angular/core';
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
  krisengebiete = ["Ukraine", "Nahost","Sudan","Myanmar"];
  kleiderarten = ["Hüte","Oberteile","Hosen","Socken","Schuhe","sonstiges Zubehör"];

  kleiderartAendern(art: string, angekreuzt: boolean) {
      if (angekreuzt) {
        this.spende.kleiderart.push(art);
      } else {
        this.spende.kleiderart = this.spende.kleiderart.filter((a) => a !== art);
      }
    }
  }


