import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

    shield = false;
    melt = false;

    constructor() {

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
