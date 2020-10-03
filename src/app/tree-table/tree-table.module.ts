import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableComponent } from './component/tree-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [TreeTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [TreeTableComponent]
})
export class TreeTableModule { }
