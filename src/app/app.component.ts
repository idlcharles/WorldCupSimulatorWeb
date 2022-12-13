import { Match, Team } from './Models/Team';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'world-cup-simulator-web';
  groups!: Team[][]
  roundOf16!: Match[]
  quarter!: Match[]
  semi!: Match[]
  final!: Match
  winner!: Team

  ngOnInit() {
    this.initRoundOf16();
    this.initQuarter();
    this.initSemi();
    this.initFinal();
    this.initWinner();
  }

  initRoundOf16(){
    this.roundOf16 = [];
    for(var i = 0; i < 8; i++){
     this.roundOf16[i] ={
      teamOne: {name: '', img:''},
      teamTwo: {name: '', img:''},
     }
    }
  }

  initQuarter(){
    this.quarter = [];
    for(var i = 0; i < 4; i++){
     this.quarter[i] ={
      teamOne: {name: '', img:''},
      teamTwo: {name: '', img:''},
     }
    }
  }

  initSemi(){
    this.semi = [];
    for(var i = 0; i < 2; i++){
     this.semi[i] ={
      teamOne: {name: '', img:''},
      teamTwo: {name: '', img:''},
     }
    }
  }

  initFinal(){
    this.final = {
      teamOne: {name: '', img:''},
      teamTwo: {name: '', img:''},
     }
    }

    initWinner(){
this.winner = {name:'', img:''}
    }
  }



