import {Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    animations: [


        trigger('clip-frame', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ transform: 'translateX(20%)' }),
                animate(1000, style({
                    transform: 'translateX(0)'
                }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(1000, style({
                    transform: 'translateX(-20%)'
                }))
            ])
        ]),
        trigger('fader', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(1000, style({
                    opacity: 1
                }))
            ]),
            transition(':leave', [
                style({ opacity: 1 }),
                animate(1000, style({
                    opacity: 0,
                }))
            ])
        ]),






        trigger('visibilityChanged', [
            state('shown' , style({ transform: 'scale(1) translateX(0)' })), // можно state('true')
            state('hidden', style({ transform: 'scale(0.5) translateX(250%)' })),
            // transition('* => *', animate('.5s')),
            transition('shown => hidden', animate('200ms')),
            transition('hidden => shown', animate('200ms')),
        ])
    ],
})
export class SlideComponent implements OnInit {

    shield = false;
    melt = false;
    showBlock = true;
    visibility = 'shown';
    currentSlide = 0;
    urlimg = 'https://i.pinimg.com/originals/22/7f/3f/227f3f42f785a7cc140ee3ae8bdaf43f.png';
    myels = [];

    slides = [{
        frameImgUrl: 'https://i.pinimg.com/originals/22/7f/3f/227f3f42f785a7cc140ee3ae8bdaf43f.png'
    }, {
        frameImgUrl: 'https://i.pinimg.com/originals/07/67/3c/07673c4f587a2c85304055ceceb52e77.png'
    }];

    constructor() {

    }

    stateName() {
        return this.showBlock ? 'show' : 'hide';
    }

    clickBut() {
        this.melt = false
        this.shield = false;
        setTimeout(() => {
            this.shield = true;
        }, 500);
    }

    clickBut2() {
        this.shield = false;
        this.melt = false;
        setTimeout(() => {
            this.melt = true;
        }, 500);
    }

    clickBut3() {
        this.myels.push({name: 'name'});
    }

    clickBut4() {
        this.showBlock = !this.showBlock;
        this.visibility = this.showBlock ? 'shown' : 'hidden';
        console.log('>>>>>>>>', this.showBlock, this.visibility);
    }

    ngOnInit() {

    }

}
