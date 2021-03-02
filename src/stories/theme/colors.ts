export type Colors =
'dark-low' |
'dark-medium' |
'dark-high' |
'magenta'|
'light-solid'|
'light-high'

export const colors: Record<Colors, string> = {
  'dark-low': 'rgba(0,0,0,0.44)',
  'dark-medium': 'rgba(0,0,0,0.60)',
  'dark-high': 'rgba(0,0,0,0.80)',
  magenta: '#E63888',
  'light-solid': '#FFFFFF',
  'light-high': 'rgba(255,255,255,0.80)'
}
