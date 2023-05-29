import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import exerciseList from './exercises.json' 

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ExercisesPage implements OnInit {

  public exercises:{title:string, subtitle:string, img:string}[] = exerciseList;
  
  constructor() { }

  ngOnInit() {

  }

}
