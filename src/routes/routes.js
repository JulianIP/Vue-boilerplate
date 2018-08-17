// Vistas
import FirstPage from '../pages/FirstPage'
import SecondPage from '../pages/SecondPage'

const routes = [
    {
      path: '/',
      component: FirstPage,
      redirect: '/firstPage'
    },
    {
      path: '/firstPage',
      component: FirstPage,
      name: 'First Page'
    },
    {
      path: '/secondPage',
      component: SecondPage,
      name: 'Second Page'
    }
]
  
  export default routes