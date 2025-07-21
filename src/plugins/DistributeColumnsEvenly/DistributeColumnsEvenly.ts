import { ButtonView, Plugin } from 'ckeditor5'

const columnEvenlyIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="4" width="4" height="16" fill="currentColor"/>
  <rect x="10" y="4" width="4" height="16" fill="currentColor"/>
  <rect x="17" y="4" width="4" height="16" fill="currentColor"/>
  <path d="M7 12H10" stroke="currentColor" stroke-width="2"/>
  <path d="M14 12H17" stroke="currentColor" stroke-width="2"/>
</svg>

`

/**
 * CKEditor plugin to distribute table columns evenly.
 */
export class DistributeColumnsEvenly extends Plugin {
  /**
   * Initializes the plugin and registers the UI button.
   */
  init(): void {
    const editor = this.editor
    editor.ui.componentFactory.add('distributeColumnsEvenly', (locale) => {
      const view = new ButtonView(locale)
      view.set({
        label: 'Distribute Columns Evenly',
        tooltip: true,
        icon: columnEvenlyIcon,
      })

      view.on('execute', () => {
        const model = editor.model
        const tableUtils = editor.plugins.get('TableUtils')
        const selection = model.document.selection
        const table = selection.getFirstPosition()?.findAncestor('table')
        if (!table) return

        const columns = tableUtils.getColumns(table)
        const width = (100 / columns).toFixed(2) + '%'

        model.change((writer) => {
          for (let col = 0; col < columns; col++) {
            for (const row of table.getChildren()) {
              if (row.is('element')) {
                const cell = row.getChild(col)
                if (cell) {
                  writer.setAttribute('columnWidth', width, cell)
                }
              }
            }
          }
        })
      })

      return view
    })
  }
}
