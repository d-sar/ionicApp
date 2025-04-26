import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar , IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonIcon,
  } from '@ionic/angular/standalone';
  import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-corner',
  templateUrl: './corner.page.html',
  styleUrls: ['./corner.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
   ]
})
export class CornerPage  {
  constructor(private navCtrl: NavController) {}

  // Ouvrir les détails d'un spot
  openSpotDetails(spotId: string) {
    this.navCtrl.navigateForward(['/photo-details', spotId]);
  }

  // Animation au clic
  cardClick(event: any) {
    const card = event.currentTarget;
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transform = '';
    }, 200);
  }

}
