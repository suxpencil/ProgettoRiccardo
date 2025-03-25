import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-figo',
  imports: [CommonModule],
  templateUrl: './alert-figo.component.html',
  styles: ``
})
export class AlertFigoComponent {

  @Output() onDeny = new EventEmitter();
  @Output() onAccept = new EventEmitter();
  @Input() denyLabel = 'no';
  @Input() acceptLabel = 'yes';

  @Input() variant: AlertVariant ;

}

type AlertVariant = 'info' | 'success' | 'error' | undefined;
