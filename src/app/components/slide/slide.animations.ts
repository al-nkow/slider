import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

export const ANIM_ARR = [
    trigger('shrink-box', [
        state('shown' , style({ width: '100%' })),
        state('hidden', style({ width: '0%' })),
        transition('shown => hidden', animate('0.4s ease-in')),
        transition('hidden => shown', animate('0ms')),
    ]),
    trigger('collapse', [
        transition(':enter', [
            style({ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }),
            animate('0.4s ease-in-out', style({
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
            }))
        ]),
        transition(':leave', [
            style({ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }),
            animate('0.4s ease-in-out', style({
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
            }))
        ])
    ]),
    trigger('clip-frame', [
        transition(':enter', [
            style({ transform: 'rotate(-15deg) skewX(-8deg) translateX(80%) translateY(20%)' }),
            animate('0.6s ease-in-out', style({
                transform: 'rotate(0) skewX(0) translateX(0) translateY(0)'
            }))
        ]),
        transition(':leave', [
            animate('0.6s ease-in-out', style({
                transform: 'rotate(15deg) skewX(8deg) translateX(-80%) translateY(-10%)'
            }))
        ])
    ]),
    trigger('fader-fast', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('0.3s ease-in-out', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('0.3s ease-in-out', style({
                opacity: 0,
            }))
        ])
    ]),
    trigger('fader', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('0.4s ease-in-out', style({
                opacity: 1
            }))
        ]),
        transition(':leave', [
            style({ opacity: 1 }),
            animate('0.4s ease-in-out', style({
                opacity: 0,
            }))
        ])
    ]),
    trigger('visibilityChanged', [
        state('shown' , style({ transform: 'scale(1) translateX(0)' })),
        state('hidden', style({ transform: 'scale(0.5) translateX(250%)' })),
        transition('shown => hidden', animate('200ms')),
        transition('hidden => shown', animate('200ms')),
    ])
];
