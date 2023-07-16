import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

    interface Fruit {
      name: string,
      icon: string
    }
    const fruit1: Fruit = {
       name: 'apple',
       icon: '🍎'
    }
    const fruit2: Fruit = {
       name: 'strawberry',
       icon: '🍓'
    }
    const fruit3: Fruit = {
       name: 'banana',
       icon: '🍌'
    }

    const fruitSource$ = from([fruit1, fruit2, fruit3]);
    const fruitResult$ = fruitSource$.pipe(
       scan((fruitObject, fruit) => {

        // la accion
        const newFruitObject = {
          ...fruitObject,
          [fruit.name]: fruit,
        };
        return newFruitObject;
      },
      // el estado inicial
      {})
    );
    fruitResult$.subscribe({
        next(fruits) {console.log('Fruits', fruits)}
    });

/*     const source$ = from([ 1, 2, 3, 4 ]);
    const result$ = source$.pipe(
        scan((sum, num) => sum + num, 0)
    );
    result$.subscribe({
        next: str => console.log(str) // 1, 3, 6, 10
    }); */


  }

}
