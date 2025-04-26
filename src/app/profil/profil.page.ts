import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class ProfilPage {
  constructor(private router: Router) {}
  onButtonClick() {
    console.log('Button clicked!');
    this.router.navigate(['/nearme']);
  }
  onButtonClickeat() {
    console.log('Button clicked!');
    this.router.navigate(['/eat']);
  }
  onButtonClickdeals() {
    console.log('Button clicked!');
    this.router.navigate(['/deals']);
  }
  onButtonClicktcorner() {
    console.log('Button clicked!');
    this.router.navigate(['/corner']);
  }
  onButtonClicktwalks() {
    console.log('Button clicked!');
    this.router.navigate(['/walks']);
  }
  onButtonClickevents() {
    console.log('Button clicked!');
    this.router.navigate(['/events']);
  }
 }