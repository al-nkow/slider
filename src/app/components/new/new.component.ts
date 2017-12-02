import {Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0, transform: 'scale(0.1) translateX(-300px)' }),
                animate(500, style({
                    opacity: 1,
                    transform: 'scale(1) translateX(0)'
                }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(500, style({
                    opacity: 0,
                    transform: 'scale(0.1) translateX(300px)'
                }))
            ])
        ]),
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1, transform: 'scale(1)' })), // можно state('true')
            state('hidden', style({ opacity: 0, transform: 'scale(0.9)' })),
            // transition('* => *', animate('.5s')),
            transition('shown => hidden', animate('1200ms')),
            transition('hidden => shown', animate('600ms')),
        ]),
        trigger('wh-anim', [
            state('shown' , style({ width: '100%' })), // можно state('true')
            state('hidden', style({ width: '0%' })),
            // transition('* => *', animate('.5s')),
            transition('shown => hidden', animate('1200ms')),
            transition('hidden => shown', animate('0ms')),
        ])
    ],
})
export class NewComponent implements OnInit {

    showBlock = true;
    visibility = 'shown';
    toggle = true;
    showEl = 1;
    her = true;

    constructor() {
    }

    ngOnInit() {
    }

    clickBut() {
        this.showBlock = !this.showBlock;
        this.visibility = this.showBlock ? 'shown' : 'hidden';
    }


}
