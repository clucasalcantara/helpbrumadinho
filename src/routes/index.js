import { Contact, Understand, Home } from 'pages'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/understand',
    exact: true,
    component: Understand
  },
  {
    path: '/contact',
    exact: true,
    component: Contact
  }
]

export default routes
