import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';   // 👈 import IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,   // 👈 standalone component mode
  imports: [IonicModule, CommonModule, FormsModule]   // 👈 add IonicModule here
})
export class HomePage {
  answers: any = {
    q1: null,
    q2: null,
    q3: null
  };

  score: number | null = null;

  submitQuiz() {
    let total = 0;

    if (this.answers.q1 === 'orfila') total++;
    if (this.answers.q2 === 'loop') total++;
    if (this.answers.q3 === 'bpa') total++;

    this.score = total;
  }
}
