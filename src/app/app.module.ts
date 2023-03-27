import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableBasicComponent } from './hoc-table-qua-vi-du/table-basic/table-basic.component';
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TableRowSelectionAndOperationComponent } from '././hoc-table-qua-vi-du/table-row-selection-and-operation/table-row-selection-and-operation.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableRowSelectionCustomComponent } from '././hoc-table-qua-vi-du/table-row-selection-custom/table-row-selection-custom.component';
import { TableSortFilterComponent } from '././hoc-table-qua-vi-du/table-sort-filter/table-sort-filter.component';
import { TestComponent } from './ViDuVeSort/test.component';
import { TableMultipleSorterComponent } from '././hoc-table-qua-vi-du/table-multiple-sorter/table-multiple-sorter.component';
import { NzTabelComponent } from './HocFullAPITable/nz-tabel/nz-tabel.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HocTableQuaViDuComponent } from './hoc-table-qua-vi-du/hoc-table-qua-vi-du.component';
import { RouterModule } from '@angular/router';
import { ThComponent } from './HocFullAPITable/th/th.component';
import { TdComponent } from './HocFullAPITable/td/td.component';
import { TrComponent } from './HocFullAPITable/tr/tr.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TableBasicComponent,
    TableRowSelectionAndOperationComponent,
    TableRowSelectionCustomComponent,
    TableSortFilterComponent,
    TestComponent,
    TableMultipleSorterComponent,
    NzTabelComponent,
    HocTableQuaViDuComponent,
    ThComponent,
    TdComponent,
    TrComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzLayoutModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'nztable', component: NzTableComponent },
    ]),
    NzPaginationModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
