import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor() { }

  source$ = from([ true, false, true, false ]);
  result$ = this.source$.pipe(
    tap(
      () => {
        return console.log('Show/hide HTML');
      },
      () => {
        return console.log('Show error message');
      },
      () => {
        return console.log('Show success');
      }
    )
);


numberSource$ = from([4,3,7,5,3,7]);
fruitResult$ = this.numberSource$.pipe(
   tap(
    (value) => { if (value > 5) {
      console.log(`Number is ${value} greater than 5`);
    }
    },

   )
);


  ngOnInit(): void {

/*     this.result$.subscribe({
      next: str => console.log(str) // true, false, true, false
  }); */

    this.fruitResult$.subscribe({
      next: rusher => console.log(rusher)
    })
  }

}
