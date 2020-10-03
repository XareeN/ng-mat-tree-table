import {Component, OnInit} from '@angular/core';
import {BASIC_FLAT_DATA} from '../mock/data-mock';

@Component({
  selector: 'app-tree-table, tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss'],
})
export class TreeTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = BASIC_FLAT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
