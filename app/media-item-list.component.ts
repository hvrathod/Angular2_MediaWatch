import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

//import { MediaItemService } from 'media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

    onMediaItemDelete(mediaItem) { }

 mediaItems = [{
        id: 1,
        name: "Firebug",
        medium: "Series",
        category: "Science Fiction",
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    },
    {
        id: 2,
        name: "Hoppers",
        medium: "Series",
        category: "Drama",
        year: null,
        watchedOn: null,
        isFavorite: true
    },
    {
        id: 3,
        name: "Happy joe; Cheery Road",
        medium: "Movies",
        category: "Action",
        year: 2015,
        watchedOn: 1294166565384,
        isFavorite: false
    }];
}
