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
import { TableBasicComponent } from './table-basic/table-basic.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TableRowSelectionAndOperationComponent } from './table-row-selection-and-operation/table-row-selection-and-operation.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TableRowSelectionCustomComponent } from './table-row-selection-custom/table-row-selection-custom.component';




registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, TableBasicComponent, TableRowSelectionAndOperationComponent, TableRowSelectionCustomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
