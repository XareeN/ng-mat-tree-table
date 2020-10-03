import {Component, Input, OnInit} from '@angular/core';
import {ExpansionTracker} from '../model/expansion-tracker';

@Component({
  selector: 'app-tree-table, tree-table',
  templateUrl: './tree-table.component.html',
  styleUrls: ['./tree-table.component.scss'],
})
export class TreeTableComponent implements OnInit {
  @Input() tree: any[];
  @Input() displayedColumns: string[];

  expansionTracker: ExpansionTracker[];
  dataSource: any[];

  constructor() {
    this.expansionTracker = [];
  }

  ngOnInit(): void {
    this.dataSource = this.tree;
    console.log(this.expansionTracker);
  }

  private updateExpansionTracker(tracker: ExpansionTracker[], row: any): void {
    if (row?.children.length > 0) {
      if (tracker.length === 0) {
        this.addTrackerElem(tracker, row);
      } else {
        let itemIsPresent = false;
        for (const elem of tracker) {
          if (elem.rowId === row.id) {
            elem.expanded = !elem.expanded;
            itemIsPresent = true;
            continue;
          }
        }
        if (!itemIsPresent) {
          this.addTrackerElem(tracker, row);
        }
      }
    }
  }

  private addTrackerElem(tracker: ExpansionTracker[], row: any): void {
    tracker.push({
      rowId: row.id,
      expanded: true,
      // children: row?.children.length > 0 ? row.children : [],
    });
  }

  public clickHandler(row: any, event?: MouseEvent): void {
    console.log(row);
    this.updateExpansionTracker(this.expansionTracker, row);
    console.log(this.expansionTracker);
  }
}
