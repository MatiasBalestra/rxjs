import { Component, OnInit } from '@angular/core';
import { from, map } from 'rxjs';

interface ServerFruit {
  name: string,
  icon: string,
  isFresh: boolean
}

interface Fruit {
  name: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

 readonly serverFruit: ServerFruit = {
    name: 'apple',
    icon: '🍎',
    isFresh: true
 }

 readonly fruitSource$ = from([this.serverFruit]);
  readonly fruitResult$ = this.fruitSource$.pipe(
    map((serverFruit: ServerFruit): Fruit => {
      const fruit: Fruit = {
        name: `(${serverFruit.icon}) ${serverFruit.name}`
      };
      return fruit;
    })
  );

  constructor() { }

  ngOnInit(): void {
    this.fruitResult$.subscribe({
      next: fruit => console.log('Transformed fruit', fruit)
  });
  }














//   import { from } from 'rxjs'
// import { map } from 'rxjs/operators'

// const source$ = from([ true, false, true, false ]);
// const result$ = source$.pipe(
//     map(value => value ? 'Yes' : 'No')
// );
// result$.subscribe({
//     next: str => console.log(str) // Yes, No, Yes, No
// })




}
