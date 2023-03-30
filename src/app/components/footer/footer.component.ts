import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DevModelComponent } from './dev-model/dev-model.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private modalService: NgbModal) {}

  open(nome:string) {
		const modalRef = this.modalService.open(DevModelComponent);
		modalRef.componentInstance.name = nome;
	}
}
