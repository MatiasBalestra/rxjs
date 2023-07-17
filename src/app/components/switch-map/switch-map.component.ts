import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, concatMap } from 'rxjs/operators';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


/*     const switchMapSource = timer(0, 1000).pipe(
      switchMap(x => timer(1500))
    );
    switchMapSource.subscribe({next: x => console.log(x)}); // no output */


    const concatMapSource = timer(0, 1000).pipe(
      concatMap(x => timer(1500))
    );
    concatMapSource.subscribe({next: x => console.log(x)}); // 0, 0, 0, 0, 0, 0 ...

  }


    // Explicame la diferencia entre switchMap y concatMap




}
