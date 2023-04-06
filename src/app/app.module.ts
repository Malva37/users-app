import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DevExtremeModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
// import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './components/filter/filter.component';
import { DetailGridComponent } from './components/detail-grid/detail-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    DetailGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DevExtremeModule,
    FormsModule,
    HttpClientModule,
    DxDataGridModule,
    DxTemplateModule,
    // AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
