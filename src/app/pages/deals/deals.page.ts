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
import { refresh, pricetag, restaurant, beer, arrowForward } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
   
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonButtons
  ]
})
export class DealsPage  {

  constructor(private navCtrl: NavController) {
    addIcons({ refresh, pricetag, restaurant, beer, arrowForward });
  }

  refreshDeals() {
    // Logique de rafraîchissement
    console.log('Actualisation des deals...');
  }

  openDeal(dealId: string) {
    this.navCtrl.navigateForward(['/deal-details', dealId]);
  }

}
