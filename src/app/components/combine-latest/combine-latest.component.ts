import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fromEvent, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})

export class CombineLatestComponent implements OnInit, AfterViewInit  {


  fruitsObject = {
    apple: {
      name: "apple",
      icon: "🍎",
      isFresh: true
    },
    banana: {
      name: "banana",
      icon: "🍎",
      isFresh: true
    },
    strawberry: {
      name: "strawberry",
      icon: "🍎",
      isFresh: true
    }
  };

  likedFruitsObject: { [key: string]: number } = {
    apple: 5,
    banana: 7,
    strawberry: 3
  };
/*
  @ViewChild('input1') input1Ref!: ElementRef;
  @ViewChild('input2') input2Ref!: ElementRef;


  source1$!: Observable<Event>;
  source2$!: Observable<Event>;
  result$!: Observable<boolean>; */

  fruitsObject$ = from([this.fruitsObject]);
  likedFruitsObject$ = from([this.likedFruitsObject]);
  fruitResult$ = combineLatest(this.fruitsObject$, this.likedFruitsObject$).pipe(
  map(([fruitsObject, likedFruitsObject]) => {
    return Object.entries(fruitsObject).reduce((newObject: { [key: string]: any }, [name, fruit]) => {
      newObject[name] = { ...fruit, likes: likedFruitsObject[name] };
      return newObject;
    }, {});
  })
);



  constructor() { }

  ngOnInit(): void {
    this.fruitResult$.subscribe({
      next: event => console.log(event)
    });


  }

  ngAfterViewInit(): void {
/*     this.source1$ = fromEvent(this.input1Ref.nativeElement, 'input');
    this.source2$ = fromEvent(this.input2Ref.nativeElement, 'input');
    this.result$ = combineLatest(this.source1$, this.source2$).pipe(
      map(([value1, value2]: [Event, Event]): boolean => (value1.target as HTMLInputElement)?.value === (value2.target as HTMLInputElement)?.value)  );

    this.result$.subscribe({
      next: event => console.log(event) // ClickEvent, InputEvent, ClickEvent, InputEvent, ClickEvent, InputEvent
    }); */


  }



}
