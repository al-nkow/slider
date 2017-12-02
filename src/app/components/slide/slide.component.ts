import {Component, OnInit} from '@angular/core';
import { ANIM_ARR } from './slide.animations';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    animations: ANIM_ARR,
})
export class SlideComponent implements OnInit {

    public animateSlide = true;
    public slides = [{
        ind: 0,
        firstName: 'Cynthia',
        lastName: 'Rothrock',
        bgColor: '#f64a52',
        frameImgUrl: './../assets/images/woman1.png',
    }, {
        ind: 1,
        firstName: 'Jozefien',
        lastName: 'Shadya',
        bgColor: '#5e87e0',
        frameImgUrl: './../assets/images/woman2.png',
    }, {
        ind: 2,
        firstName: 'Aaminah',
        lastName: 'Gamila',
        bgColor: '#5fe09a',
        frameImgUrl: './../assets/images/woman3.png',
    }];
    public underColor = '';
    public prevColor = '';
    public currentSlide = this.slides[0];

    constructor() {}

    ngOnInit() {
        this.changeSlide(0, true);
    }

    public changeSlide(i:number, init:boolean) {
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
