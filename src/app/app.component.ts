import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
  public appPages = [
    { title: 'Accueil', url: '/folder/Accueil', icon: 'home' },
    { title: 'Profil', url: '/profil', icon: 'person' },
    
  ];
  
}
