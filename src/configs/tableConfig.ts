import {
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
} from 'ckeditor5'

export const tablePlugins = [
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
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
    ],
  },
}
