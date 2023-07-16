import { Component, OnInit, ElementRef, ViewChild, AfterViewInit  } from '@angular/core';
import { Observable, fromEvent } from 'rxjs'
import { merge } from 'rxjs'


@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit, AfterViewInit {

  @ViewChild('input1') input1Ref!: ElementRef;
  @ViewChild('input2') input2Ref!: ElementRef;

  @ViewChild('back1') back1Ref!: ElementRef;
  @ViewChild('back2') back2Ref!: ElementRef;

  source1$!: Observable<Event>;
  source2$!: Observable<Event>;
  result$!: Observable<Event>;

  back1$!:Observable<Event>;
  back2$!: Observable<Event>;
  resultBack$!: Observable<Event>;


  constructor() { }

  ngAfterViewInit(): void {
    this.source1$ = fromEvent(this.input1Ref.nativeElement, 'click');
    this.source2$ = fromEvent(this.input2Ref.nativeElement, 'input');
    this.result$ = merge(this.source1$, this.source2$);

    this.result$.subscribe({
      next: event => console.log(event) // ClickEvent, InputEvent, ClickEvent, InputEvent, ClickEvent, InputEvent
    });

    this.back1$ = fromEvent(this.back1Ref.nativeElement, 'click');
    this.back2$ = fromEvent(this.back2Ref.nativeElement, 'click');
    this.resultBack$ = merge(this.back1$, this.back2$)


    this.resultBack$.subscribe({
      next: event => console.log(event)
    }
    )
  }


  ngOnInit(): void {

  }

}
