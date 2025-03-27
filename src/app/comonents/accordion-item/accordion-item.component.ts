import { booleanAttribute, Component, Input } from "@angular/core";

@Component({
  selector: "app-accordion-item",
  imports: [],
  template: `
    <div class="bg-primary border-base-300 collapse border">
      <input type="radio" [name]="groupName" [checked]="selected" />
      <div class="collapse-title font-semibold">
        {{ title }}
      </div>
      <div class="collapse-content text-sm">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ``,
})
export class AccordionItemComponent {

  @Input() title="titolo generico";
  @Input({transform : booleanAttribute}) selected =  false;
  @Input() groupName ="my-accordion-1";

}
