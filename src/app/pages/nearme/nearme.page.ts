import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-nearme',
  templateUrl: './nearme.page.html',
  styleUrls: ['./nearme.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule]
})
export class NearmePage  {
 constructor() {
    console.log('NearmePage initialized');
  }
}
