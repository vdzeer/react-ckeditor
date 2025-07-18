import {
  Image,
  ImageToolbar,
  ImageResize,
  ImageStyle,
  LinkImage,
  ImageCaption,
  ImageUpload,
  ImageInsert,
  Base64UploadAdapter,
} from 'ckeditor5'

export const imagePlugins = [
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageInsert,
  LinkImage,
  Base64UploadAdapter,
]

export const imageToolbarOptions = ['insertImage']

export const imageConfig = {
  image: {
    insert: {
      integrations: ['upload', 'url'],
    },
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Default image width',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50% page width',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75% page width',
        value: '75',
      },
    ],
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      '|',
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      '|',
      'resizeImage',
    ],
  },
}
