import { ClassicEditor, Essentials } from 'ckeditor5'
import { fontConfig, fontPlugins, fontToolbar } from './fontConfig'
import { imagePlugins, imageToolbarOptions, imageConfig } from './imageConfig'
import { tablePlugins, tableToolbarOptions, tableConfig } from './tableConfig'
import { listsPlugins, listsToolbarOptions } from './listsConfig'
import { linkPlugins, linkConfig, linkToolbarOptions } from './linkConfig'
import {
  headingConfig,
  headingPlugins,
  headingToolbarOptions,
} from './headingConfig'

const insertToolbar = {
  label: 'Insert',
  icon: 'plus',
  items: [...tableToolbarOptions, ...imageToolbarOptions],
}

const toolbar = [
  'undo',
  'redo',
  '|',
  ...headingToolbarOptions,
  '|',
  fontToolbar,
  insertToolbar,
  '|',
  ...linkToolbarOptions,
  ...listsToolbarOptions,
]

const LICENSE_KEY = import.meta.env.VITE_CKEDITOR_LICENSE_KEY || ''

export const ckeditorConfig = {
  editor: ClassicEditor,
  config: {
    licenseKey: LICENSE_KEY,
    plugins: [
      Essentials,
      ...fontPlugins,
      ...tablePlugins,
      ...imagePlugins,
      ...listsPlugins,
      ...linkPlugins,
      ...headingPlugins,
    ],
    toolbar,
    ...fontConfig,
    ...tableConfig,
    ...imageConfig,
    ...linkConfig,
    ...headingConfig,
    initialData: '<p>Hello from CKEditor 5 in React!</p>',
  },
}
