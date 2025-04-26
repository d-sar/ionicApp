import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent,
  IonBadge,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { walk, time } from 'ionicons/icons';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-walks',
  templateUrl: './walks.page.html',
  styleUrls: ['./walks.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,  
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    IonIcon]
})
export class WalksPage  {

  constructor(private navCtrl: NavController) {
    addIcons({ walk, time });
  }

  openWalkDetails(walkId: string) {
    this.navCtrl.navigateForward(['/walk-details', walkId]);
  }

}
