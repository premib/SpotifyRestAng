import { Component, OnInit } from '@angular/core';
import { ShareService } from "../share.service";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ad-modal',
  templateUrl: './ad-modal.component.html',
  styleUrls: ['./ad-modal.component.css']
})
export class AdModalComponent implements OnInit {

  imageSource: string;
  
  constructor(public activeModal: NgbActiveModal, private sharedData : ShareService) {
    this.imageSource =  sharedData.getAdModalImageSource();
   }

  
  ngOnInit(): void {
  }

}
