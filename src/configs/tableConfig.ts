import {
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
} from 'ckeditor5'

import { DistributeColumnsEvenly } from '../plugins'

export const tablePlugins = [
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
  DistributeColumnsEvenly,
]

export const tableToolbarOptions = ['insertTable']

export const tableConfig = {
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
      'distributeColumnsEvenly',
    ],
  },
}
