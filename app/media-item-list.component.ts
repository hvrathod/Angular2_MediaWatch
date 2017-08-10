import { Component } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {

	mediaItems;

    constructor(private mediaItemService: MediaItemService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.mediaItems = this.mediaItemService.get();
    }

    onMediaItemDelete(mediaItem) { 
        this.mediaItemService.delete(mediaItem);
    }

 	
}
