import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { MapComponent } from './components/map/map.component';
import { FilterComponent } from './components/filter/filter.component';
import { TapComponent } from './components/tap/tap.component';
import { MergeComponent } from './components/merge/merge.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { CatchErrorComponent } from './components/catch-error/catch-error.component';
import { TakeUntilComponent } from './components/take-until/take-until.component';
import { ScanComponent } from './components/scan/scan.component';
import { SwitchMapComponent } from './components/switch-map/switch-map.component';

const routes: Routes = [
  {path: 'from', component: TestComponent},
  {path: 'map', component: MapComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'tap', component: TapComponent},
  {path: 'merge', component: MergeComponent},
  {path: 'combine', component: CombineLatestComponent},
  {path: 'error', component: CatchErrorComponent},
  {path: 'take', component: TakeUntilComponent},
  {path: 'scan', component: ScanComponent},
  {path: 'switch', component: SwitchMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
