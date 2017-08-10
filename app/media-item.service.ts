export class MediaItemService{
		get(){
			return this.mediaItems;
        }

        add(mediaItem){
			this.mediaItems.push(mediaItem);
        }

        delete(mediaItem){
            let index = this.mediaItems.indexOf(mediaItem);
            if(index >=0){
                this.mediaItems.splice(index, 1);
            }
        }

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