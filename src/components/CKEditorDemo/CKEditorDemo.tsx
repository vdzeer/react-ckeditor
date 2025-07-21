import { CKEditor } from '@ckeditor/ckeditor5-react'
import 'ckeditor5/ckeditor5.css'
import { ckeditorConfig } from '../../configs/ckeditorConfig'

/**
 * CKEditor demo component for integration showcase.
 */
export function CKEditorDemo() {
  return (
    <CKEditor editor={ckeditorConfig.editor} config={ckeditorConfig.config} />
  )
}
