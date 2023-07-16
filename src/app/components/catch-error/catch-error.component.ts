import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';



interface Fruit {
  name: string;
  icon: string;
  isFresh: boolean;
}

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss']
})
export class CatchErrorComponent implements OnInit {


  constructor() { }

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
      isFresh: false,
    },
  ];


  ngOnInit(): void {
/*     from([1, 2, 3]).pipe(
      map(x => {
        if(x % 2 === 0) {
          throw new Error('Unexpected even number ' + x);
        }
        return x * 2;
      }),
      catchError(x => {
        console.error(x);
        return from([-1])
      })
    ).subscribe({next: console.log});
  } */

  from(this.fruits).pipe(
    map(fruit => {
      if(!fruit.isFresh) {
        throw new Error(`fruit is not fresh: ${fruit}`)
      }
      return fruit;
    }),
    catchError((error) => {
      console.log(error)
      return from([]);
    })
  ).subscribe({
    next: console.log
  });

}
}
