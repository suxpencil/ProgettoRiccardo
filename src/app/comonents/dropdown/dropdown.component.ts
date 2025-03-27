import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  template: `
    <details class="dropdown"
    [ngClass]="{
      'dropdown-top' : position === 'top',
      'dropdown-left' : position === 'left',
      'dropdown-right' : position === 'right'

    }"
    >
    <summary class="btn m-1">open or close</summary>
    <ul class="menu dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-sm">
     @for(item of items; track $index){
      <li (click)="onClickElement.emit(item.value)">
        <u>{{item.label}}</u>
      </li>
     }
    </ul>
  </details>
  `,
  styles: ``
})
export class DropdownComponent {

  @Input() items: DropdownItem[] = [];
  @Output() onClickElement = new EventEmitter;
  @Input() position = "bottom";


}

export interface DropdownItem {
  label: string;
  value: string;
}

export type DropdownPosition = "left" | "right" | "top" | "bottom";
