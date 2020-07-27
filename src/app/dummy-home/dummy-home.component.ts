import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdModalComponent } from '../ad-modal/ad-modal.component';
import { ShareService } from '../share.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dummy-home',
  templateUrl: './dummy-home.component.html',
  styleUrls: ['./dummy-home.component.css']
})
export class DummyHomeComponent implements OnInit {

  cardData;
  cardImages: Array<string> = [];

  constructor(private modalService: NgbModal, private http: HttpService) {
    
    http.getDummyHome(). subscribe(
      data =>{
        this.cardData = data;
        console.log(data)
        this.cardData.forEach(element => {
          console.log(`data:${element.type};base64,${element.picByte}`)
          this.cardImages.push(`data:${element.type};base64,${element.picByte}`)
        });
      },
      err =>{
        console.log(err);
      }
    )
  }

  ngOnInit(): void {
  }

  
  openLg(content) {
    this.modalService.open(AdModalComponent, { 
      size: 'lg',
      centered: true
    });
  }

}
