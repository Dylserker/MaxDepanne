import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home.component').then(m => m.HomeComponent), title: 'Accueil' },
  { path: 'services', loadComponent: () => import('./pages/services.component').then(m => m.ServicesComponent), title: 'Services' },
  { path: 'zone', loadComponent: () => import('./pages/zone.component').then(m => m.ZoneComponent), title: "Zone d'intervention" },
  { path: 'contact', loadComponent: () => import('./pages/contact.component').then(m => m.ContactComponent), title: 'Contact' },
  { path: 'avis', loadComponent: () => import('./pages/avis.component').then(m => m.AvisComponent), title: 'Avis' },
  { path: '**', redirectTo: '' }
];
