import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemService } from './media-item.service';
// import {lookupListToken,lookupLists} from './providers';
import { routing } from './app.routing';

const lookupLists = {
	mediums: ['Movies','Series']
};

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        routing

    ],
    declarations:[
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        MediaItemFormComponent
        
    ],
    providers:[
		MediaItemService,
        {provide: 'lookupListToken', useValue: lookupLists}

    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule {} 