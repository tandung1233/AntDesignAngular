import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NzTabelComponent } from './HocFullAPITable/nz-tabel/nz-tabel.component';
import { HocTableQuaViDuComponent } from './hoc-table-qua-vi-du/hoc-table-qua-vi-du.component';
import { TdComponent } from './HocFullAPITable/td/td.component';
import { ThComponent } from './HocFullAPITable/th/th.component';
import { TrComponent } from './HocFullAPITable/tr/tr.component';

const routes: Routes = [
  { path: '', component: HocTableQuaViDuComponent },
  { path: 'nztable', component: NzTabelComponent },
  { path: 'td', component: TdComponent },
  { path: 'th', component: ThComponent },
  { path: 'tr', component: TrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
