import {Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss'],
    animations: [
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

    myels = [];

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
