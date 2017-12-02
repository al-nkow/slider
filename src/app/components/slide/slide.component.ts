import {Component, OnInit} from '@angular/core';
import { ANIM_ARR } from './slide.animations';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    animations: ANIM_ARR,
})
export class SlideComponent implements OnInit {

    animateSlide = true;
    slides = [{
        ind: 0,
        firstName: 'Cynthia',
        lastName: 'Rothrock',
        bgColor: '#f64a52',
        frameImgUrl: 'https://i.pinimg.com/originals/22/7f/3f/227f3f42f785a7cc140ee3ae8bdaf43f.png'
    }, {
        ind: 1,
        firstName: 'Jozefien',
        lastName: 'Shadya',
        bgColor: '#5e87e0',
        frameImgUrl: 'https://i.pinimg.com/originals/07/67/3c/07673c4f587a2c85304055ceceb52e77.png'
    }];
    underColor = '';
    prevColor = '';
    currentSlide = this.slides[0];

    constructor() {}

    ngOnInit() {
        this.changeSlide(0, true);
    }

    changeSlide(i:number, init:boolean) {
        if ((i === this.currentSlide.ind) && !init) return false;
        this.prevColor = this.currentSlide.bgColor;
        this.underColor = i === this.slides.length ? this.slides[0].bgColor : this.slides[i].bgColor;
        this.currentSlide = this.slides[i];
        this.animateSlide = false;
        setTimeout(() => {
            this.animateSlide = true;
            this.prevColor = this.underColor;
        }, 500)
    }

}
