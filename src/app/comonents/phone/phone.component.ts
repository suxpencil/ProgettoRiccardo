import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
  selector: "app-phone",
  imports: [],
  templateUrl: "./phone.component.html",
  styles: ``,
})
export class PhoneComponent {
  @Input({ required: true }) src: string = "";
  @Input({ transform: (value: string) => value.toUpperCase() }) alt: string =
    "";

  //primo es: aggiungere una input che mi faccia vedere in modo
  // condizionale la scrita ALT al centro dello schermo

  @Input({ transform: booleanAttribute }) showAlt: boolean = false;

  //aggiungere una input per gestire le grandezze del layout

  @Input({
    transform: (value: "sm" | "md" | "xl") => {
      switch (value) {
        case "sm":
          return 50;
        case "md":
          return 75;
        case "xl":
          return 100;
        default:
          return 100;
      }
    },
  })
  size: number = 100;
}
