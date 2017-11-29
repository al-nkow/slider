import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

    shield = false;
    melt = false;

    constructor() {

    }

    clickBut() {
        this.shield = !this.shield;
    }

    clickBut2() {
        this.melt = !this.melt;
    }

    ngOnInit() {
        // document.getElementById("trigger").addEventListener('click', function() {
        //     console.log('TEST');
        //     document.getElementById("ani-circle").beginElement();
        // });
        // document.getElementById("trigger2").addEventListener('click', function() {
        //     console.log('TEST');
        //     document.getElementById("ani-circle2").beginElement();
        // });
        // document.getElementById("trigger3").addEventListener('click', function() {
        //     console.log('TEST');
        //     document.getElementById("ani-circle3").beginElement();
        //     // document.getElementById("ani-circle4").beginElement();
        // });
    }

}
