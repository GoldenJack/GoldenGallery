export const routes = [
  {
    name: 'Домашняя',
    to: '/',
    subMenuTitle: 'Навигация',
    subMenu: []
  },
  {
    name: 'Галлерея',
    to: '/gallery',
    subMenuTitle: 'Альбомы',
    subMenu: [
      {
        name: 'Пейзажи',
        to: '/gallery/landscape'
      },
      {
        name: 'Города',
        to: '/gallery/city'
      },
      {
        name: 'Люди',
        to: '/gallery/peaple'
      }
    ]
  }
]