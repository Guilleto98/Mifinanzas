
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {

  playerOne = ""
  playerTwo = ""
  currentPlayer  = ""
  currentRound = 1

  plays: {play: string, player: string}[] = []

  setPlayerOne = (player : string)=> this.currentPlayer = this.playerOne = player 
  setPlayerTwo = (player : string)=> this.playerTwo = player
  save = ()=>{
    console.log({playerOne: this.playerOne, playerTwo:this.playerTwo})
  }
  setCurrentPlayer= (player: string) => this.currentPlayer = player

  selectPlay = (play: string, player: string) => {
    this.plays.push({player, play})
  }
}