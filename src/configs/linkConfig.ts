import { Link } from 'ckeditor5'

export const linkPlugins = [Link]

export const linkToolbarOptions = ['link']

export const linkConfig = {
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
  },
}
