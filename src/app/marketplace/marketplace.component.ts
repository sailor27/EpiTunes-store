// 🛍🎵 markeplace component

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})
export class MarketplaceComponent implements OnInit {
  albums: Album[];
  constructor(private router: Router, private albumService: AlbumService) {}

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }



  goToDetailPage(clickedAlbum: Album) {
     this.router.navigate(['albums', clickedAlbum.id]);
  };

  @Output() newAlbumSender = new EventEmitter();

// dont do it this way
  // submitForm(title, artist, description, id) {
  //   var newAlbumToAdd: Album = new Album(title, artist, description, id);
  //   this.newAlbumSender.emit(newAlbumToAdd);
  //   console.log(newAlbumToAdd);
  //   albums.addAlbum()
  }

}
