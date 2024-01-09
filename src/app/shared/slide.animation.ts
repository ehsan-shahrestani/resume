// import {
//   trigger,
//   transition,
//   style,
//   query,
//   animateChild,
//   group,
//   animate,
// } from '@angular/animations';

// export const slideInAnimation = trigger('routeAnimations', [
//   transition('* <=> *', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })], { optional: true }),
//     query(':leave', animateChild(), { optional: true }),
//     group([
//       query(
//         ':leave',
//         [animate('300ms ease-out', style({ left: '100%', opacity: '0%' }))],
//         { optional: true }
//       ),
//       query(
//         ':enter',
//         [animate('300ms ease-out', style({ left: '0%', opacity: '100%' }))],
//         { optional: true }
//       ),
//     ]),
//   ]),
// ]);
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

export const fadeInOutAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '0', // Set the initial top position for the entering page
        left: '0',
        width: '100%',
        opacity: 1,
      }),
    ]),
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('300ms ease-out', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [animate('300ms ease-in', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
