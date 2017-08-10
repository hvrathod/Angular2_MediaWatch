System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MediaItemListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { ActivatedRoute } from '@angular/router';
            //import { MediaItemService } from 'media-item.service';
            MediaItemListComponent = (function () {
                function MediaItemListComponent() {
                    this.mediaItems = [{
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
                MediaItemListComponent.prototype.onMediaItemDelete = function (mediaItem) { };
                MediaItemListComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-media-item-list',
                        templateUrl: 'app/media-item-list.component.html',
                        styleUrls: ['app/media-item-list.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MediaItemListComponent);
                return MediaItemListComponent;
            }());
            exports_1("MediaItemListComponent", MediaItemListComponent);
        }
    }
});
//# sourceMappingURL=media-item-list.component.js.map