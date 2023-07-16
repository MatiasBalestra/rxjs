import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';


interface ServerFruit {
  name: string,
  icon: string,
  isFresh: boolean
}
interface Fruit {
    name: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor() { }


  readonly serverFruit1: ServerFruit = {
    name: 'apple',
    icon: '🍎',
    isFresh: true
 }

  ngOnInit(): void {
    this.fruitResult$.subscribe({
      next(fruit) {console.log('Fresh fruit', fruit)}
  });
  }

    readonly fruitSource$ = from([this.serverFruit1]);
    readonly fruitResult$ = this.fruitSource$.pipe(
      filter((fruit : ServerFruit):boolean => fruit.isFresh )
    );



}
