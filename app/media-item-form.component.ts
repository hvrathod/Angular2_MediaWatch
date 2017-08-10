import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css']
})

export class MediaItemFormComponent{
	form;

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.form = new FormGroup({
            medium: new FormControl('Movies'),
            name: new FormControl('',Validators.compose([
				Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: new FormControl(''),
            year: new FormControl('',this.yearValidator),
        })
    }

    yearValidator(control){
        if(control.value.trim().lenght === 0){
            return null;
        }

        let year = parseInt(control.value);
        let minYear = 1900;
        let maxYear = 2100;
        if(year >=minYear && year <= maxYear){
            return null;
        }
        else {
            return {'year': true};
        }
    }
    onSubmit(mediaItem){
        console.log(mediaItem);
    }
}