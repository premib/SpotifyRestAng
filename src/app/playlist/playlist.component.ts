import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdModalComponent } from '../ad-modal/ad-modal.component';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  musicShow: boolean;
  musicIcon;
  playlistTitle: string;

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private http: HttpService) {  
    this.route.params.subscribe(args =>{
      this.playlistTitle = args['name'];
    });
    http.getPlaylistSongs(name).subscribe(
      data=>{
        console.log(data)
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
