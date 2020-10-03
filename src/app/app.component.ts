import { Component } from '@angular/core';
import { TREE_DATA } from './tree-table/mock/data-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource = TREE_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
}
