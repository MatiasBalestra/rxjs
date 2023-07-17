import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MapComponent,
    FilterComponent,
    TapComponent,
    MergeComponent,
    CombineLatestComponent,
    CatchErrorComponent,
    TakeUntilComponent,
    ScanComponent,
    SwitchMapComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
