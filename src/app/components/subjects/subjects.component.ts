import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    // BehaviorSubject Example
    /*     const subject$ = new BehaviorSubject(0);
    subject$.subscribe(value => {
      console.log('Suscriptor 1:', value);
    });
    subject$.next(1);
    subject$.next(2);
    subject$.next(3);
    subject$.subscribe(value => {
      console.log('Suscriptor 2:', value);
    });
    subject$.next(5); */


    // ReplaySubject Example

    /*     const replaySubject$ = new ReplaySubject(2);

    replaySubject$.subscribe(value => {
      console.log('Suscriptor 1:', value);
    }
    );

    replaySubject$.next('Hola 1');
    replaySubject$.next('Mundo 2');
    replaySubject$.next('Hola 3');
    replaySubject$.next('Mundo 4');
    replaySubject$.next('Mundo 5');

    replaySubject$.subscribe(value => {
      console.log('Suscriptor 2:', value);
    }
    );

    replaySubject$.next('Hola 3');
    replaySubject$.next('Mundo 4');
    replaySubject$.next('Mundo 5'); */


    // Subject Example

/*   const subject$ = new Subject();

  subject$.subscribe(value => {
    console.log('Suscriptor 1:', value);
  });

  subject$.next('Hola');
  subject$.next('Hola');


  subject$.subscribe(value => {
    console.log('Suscriptor 2:', value);
  });

  subject$.next('Mundo');
 */


  //  AsyncSubject: Example

/*   const asyncSubject$ = new AsyncSubject();

  asyncSubject$.subscribe(value => {
    console.log('Suscriptor 1:', value);
  }
  );

  asyncSubject$.next('Hola 1');
  asyncSubject$.next('Mundo 2');
  asyncSubject$.next('Hola 3');
  asyncSubject$.complete();

  asyncSubject$.subscribe(value => {
    console.log('Suscriptor 2:', value);
  }
  ); */



}

}
