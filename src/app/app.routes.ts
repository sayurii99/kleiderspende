import { Routes } from '@angular/router';
import {Start} from './pages/start/start';
import {Legal} from './pages/legal/legal';
import {Privacy} from './pages/privacy/privacy';
import {Registration} from './pages/registration/registration';
import {Confirmation} from './pages/confirmation/confirmation';

export const routes: Routes = [
  { path: '',
    component: Start,
  },

  {
    path: 'legal',
    component: Legal,
  },

  {
    path: 'privacy',
    component: Privacy,
  },

  {
    path: 'registration',
    component: Registration,
  },

  {
    path: 'confirmation',
    component: Confirmation,
  }

];
