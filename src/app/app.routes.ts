import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profil',
    pathMatch: 'full',
  },
  {
    path: 'profil',
    loadComponent: () => import('./profil/profil.page').then(m => m.ProfilPage)
  },
  {
    path: 'nearme',
    loadComponent: () => import('./pages/nearme/nearme.page').then(m => m.NearmePage)
  },
  {
    path: 'eat',
    loadComponent: () => import('./pages/eat/eat.page').then(m => m.EatPage)
  },
  {
    path: 'corner',
    loadComponent: () => import('./pages/corner/corner.page').then(m => m.CornerPage)
  },
  {
    path: 'deals',
    loadComponent: () => import('./pages/deals/deals.page').then(m => m.DealsPage)
  },
  {
    path: 'walks',
    loadComponent: () => import('./pages/walks/walks.page').then(m => m.WalksPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events.page').then( m => m.EventsPage)
  },
];
