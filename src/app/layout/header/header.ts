import { Component, signal } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // Signal Standardwert auf geschlossen (false)
  menuOffen = signal(false);
  //Methode, wenn Button angeklickt wird
  toggleMenu() {
    this.menuOffen.update((vorher) => !vorher);
  }

  //Methode zum Menü schließen
  closeMenu() {
    this.menuOffen.set(false);
    }
}
