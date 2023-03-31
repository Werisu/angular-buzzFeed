import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-dev-model',
  templateUrl: './dev-model.component.html',
  styleUrls: ['./dev-model.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeOut', [    transition('* => void', [      animate(500, style({ opacity: 0 }))    ])
    ])
  ]
})
export class DevModelComponent {
  @Input() name = '';
  viewDev = false;

	constructor(public activeModal: NgbActiveModal) {}
}
