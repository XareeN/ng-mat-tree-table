export interface ExpansionTracker {
  rowId: number;
  expanded?: boolean;
  children?: ExpansionTracker[];
}
