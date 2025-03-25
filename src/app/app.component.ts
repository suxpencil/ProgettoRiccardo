import { Component, computed, effect, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhoneComponent } from "./comonents/phone/phone.component";
import { TimelineComponent, TimelineItem } from "./comonents/timeline/timeline.component";
import { AlertFigoComponent } from "./comonents/alert-figo/alert-figo.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, CommonModule, PhoneComponent, TimelineComponent, AlertFigoComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {

    imageUrl= "https://img.daisyui.com/images/stock/453966.webp"
    alt ="wallpaper"


    timelineItems: TimelineItem[] = [
      { start: "2021-01-01", end: "Mario" },
      { start: "2021-01-03", end: "Luigi" },
      { start: "2021-01-05", end: "Michele" }, 
    ];

    onDenyHandler() {
        window.alert("Denied!");
    }

    onAcceptHandler() {
        window.alert("Accepted!");
    }

}

