import { Bold, Font, Italic, Strikethrough, Underline } from 'ckeditor5'

export const fontSizeOptions = [
  8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72,
]

export const fontFamilyOptions = [
  'default',
  'Arial, Helvetica, sans-serif',
  'Courier New, Courier, monospace',
  'Georgia, serif',
  'Lucida Sans Unicode, Lucida Grande, sans-serif',
  'Tahoma, Geneva, sans-serif',
  'Times New Roman, Times, serif',
  'Trebuchet MS, Helvetica, sans-serif',
  'Verdana, Geneva, sans-serif',
]

export const fontColorOptions = { columns: 5 }
export const fontBackgroundColorOptions = { columns: 5 }

export const fontToolbar = {
  label: 'Font',
  icon: 'text',
  items: [
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'fontSize',
    'fontFamily',
    'fontColor',
    'fontBackgroundColor',
  ],
}

export const fontPlugins = [Bold, Italic, Underline, Strikethrough, Font]

export const fontConfig = {
  fontSize: { options: fontSizeOptions },
  fontFamily: { options: fontFamilyOptions },
  fontColor: fontColorOptions,
  fontBackgroundColor: fontBackgroundColorOptions,
}
