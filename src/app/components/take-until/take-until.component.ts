import { Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})


export class TakeUntilComponent implements OnInit, AfterViewInit {

  @ViewChild('input1') input1Ref!: ElementRef;
  @ViewChild('btnstop') btnStopRef!: ElementRef;


  source1$!: Observable<Event>;
  source2$!: Observable<Event>;
  result$!: Observable<Event>;


  constructor() { }

  ngAfterViewInit(): void {

    this.source1$ = fromEvent(this.input1Ref.nativeElement, 'input');
    this.source2$ = fromEvent(this.btnStopRef.nativeElement, 'click');

    this.result$ = this.source1$.pipe(
      takeUntil(this.source2$)
    );
    this.result$.subscribe({
       next: (next) => console.log(next),
      complete: () => console.log('Stream stopped') // Executed when button with id `btn-stop` is clicked
    });
  }

  ngOnInit(): void {
  }

}
