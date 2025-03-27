import { Component, computed, effect, inject, OnInit, signal } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PhoneComponent } from "./comonents/phone/phone.component";
import { TimelineComponent, TimelineItem } from "./comonents/timeline/timeline.component";
import { AlertFigoComponent } from "./comonents/alert-figo/alert-figo.component";
import TodoListComponent from "./comonents/todo-list/todo-list.component";
import { AccordionItemComponent } from "./comonents/accordion-item/accordion-item.component";
import { DropdownComponent, DropdownItem } from "./comonents/dropdown/dropdown.component";

@Component({
  selector: "app-root",
  imports: [
    CommonModule,
    
],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {

  private readonly router = inject(Router)

  ngOnInit(): void {
    //this.router.navigateByUrl('todo-list');
    //this.router.navigateByUrl('reactive-todo-list');
  }

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


    dropdpwnItems: DropdownItem[] = [
      { label: "Button ", value: "button" },
      { label: "Modal", value: "modal" },
      { label: "Accordion", value: "accordion" },
      { label: "utilities and variables", value: "utilities-and-variables" },
    ];


    onClickElementHandler(event: string){
      window.alert(`hai selezionato l'elemento : $!event`)
    }
}

