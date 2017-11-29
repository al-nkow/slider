import {Component, OnInit} from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
    selector: 'app-new',
    templateUrl: './new.component.html',
    styleUrls: ['./new.component.scss'],
    animations: [
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1, transform: 'scale(1)' })), // можно state('true')
            state('hidden', style({ opacity: 0, transform: 'scale(0.9)' })),
            // transition('* => *', animate('.5s')),
            transition('shown => hidden', animate('1200ms')),
            transition('hidden => shown', animate('600ms')),
        ])
    ],
})
export class NewComponent implements OnInit {

    showBlock = true;
    visibility = 'shown';

    constructor() {
    }

    ngOnInit() {
    }

    clickBut() {
        this.showBlock = !this.showBlock;
        this.visibility = this.showBlock ? 'shown' : 'hidden';
    }


}
