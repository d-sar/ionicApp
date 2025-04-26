import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar ,
   
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendar, musicalNotes, time, brush, restaurant, arrowForward } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonHeader,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonButtons]
})
export class EventsPage  {

  constructor(private navCtrl: NavController) {
    addIcons({ calendar, musicalNotes, time, brush, restaurant, arrowForward });
  }

  openCalendar() {
    // Ouvrir le calendrier des événements
    this.navCtrl.navigateForward('/events-calendar');
  }

  openEvent(eventId: string) {
    // Navigation vers les détails de l'événement
    this.navCtrl.navigateForward(['/event-details', eventId]);
  }

}
