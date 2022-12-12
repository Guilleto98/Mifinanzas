
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-players-form",
  templateUrl: "./playersForm.component.html",
  styleUrls: ["./playersForm.component.css"]
})
export class PlayersForm {
  playerOne: string = "";
  playerTwo: string = "";

  @Input() setPlayerOne : (player:string)=>void = ()=>{}
  @Input() setPlayerTwo : (player:string)=>void = ()=>{}

  save = ()=>{
    this.setPlayerOne(this.playerOne)
    this.setPlayerTwo(this.playerTwo)
  }
}