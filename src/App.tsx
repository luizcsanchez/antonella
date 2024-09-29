import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/home'
import { RecipesPage } from './pages/recipes'
import { EventsPage } from './pages/events'
import { AboutPage } from './pages/about'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/recipes',
    element: <RecipesPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
