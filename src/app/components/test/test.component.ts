import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

export interface Fruit {
  name: string;
  icon: string;
  isFresh: boolean;
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})



export class TestComponent implements OnInit {


  fruits: Fruit[] = [
  {
    name: "apple",
    icon: "🍎",
    isFresh: true,
  },
  {
    name: "banana",
    icon: "🍌",
    isFresh: true,
  },
  {
    name: "stawberry",
    icon: "🍓",
    isFresh: true,
  },
];

source$= from(this.fruits)
fruits$ = from(this.fruits);


constructor() { }

ngOnInit(): void {
  this.processData(this.source$);

    this.processData(this.fruits$)
}


  processData(source: Observable<Fruit>) {
    source.subscribe({
        next(fruit) {console.log(fruit)}
    })
}

}
