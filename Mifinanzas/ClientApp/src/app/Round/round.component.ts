
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-round",
  templateUrl: "./round.component.html",
  styleUrls: ["./round.component.css"]
})
export class Round {
  @Input() playerOne: string = "";
  @Input() playerTwo: string = "";
  @Input() currentRound : number = 1
  @Input() currentPlayer : string = this.playerOne;
  @Input() selectPlay : (play: string, player: string)=> void  = ()=>{}
  @Input() setCurrentPlayer : ( player: string)=> void  = ()=>{}

  possiblePlays =  [ "Rocks", "Paper", "Scissors" ];
  selectedPlay = ""


  saveSelectedPlay = ()=>{
    this.selectPlay(this.selectedPlay, this.playerOne)
    this.setCurrentPlayer(this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne)
  }

   
}