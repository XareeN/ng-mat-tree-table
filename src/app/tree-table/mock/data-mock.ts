import {PeriodicElement} from '../model/periodic-element';

export const BASIC_FLAT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

export const TREE_DATA: any[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', children: [
    {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', children: []},
    {id: 5, name: 'Boron', weight: 10.811, symbol: 'B', children: [
      {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', children: []},
      {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', children: []},
      {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', children: []},
    ]},
  ]},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He', children: [
    {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', children: []},
    {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', children: []},
  ]},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', children: []},
];
