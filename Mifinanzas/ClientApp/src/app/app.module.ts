
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./Home/home.component";
import { ChoseComponent } from "./ChoseAnOption/choseAnOption.component"
import { FormsModule } from "@angular/forms";
import { PlayersForm } from "./PlayersForm/playersForm.component";
import { Round } from "./Round/Round.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChoseComponent,
    PlayersForm,
    Round
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }