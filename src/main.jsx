import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// CSS
import './Style-1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Pages
import Home from './Home.jsx'
import About from './About.jsx'
import Service from './Service.jsx'
import Contact from './Contact.jsx'
import Effect from './Hooks/Effect.jsx'
import NavigateHooks from './Hooks/NavigateHooks.jsx'
import NavigatePractice from './Hooks/NavigatePractice.jsx'
import Users from './api/Users.jsx'
import Products from './api/Products.jsx'

// Router config
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Service />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/effect-hooks',
    element: <Effect />
  },
  {
    path: '/menu',
    element: <NavigateHooks />
  },
  {
    path: '/redirect',
    element: <NavigatePractice />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/products',
    element: <Products />
  },
])

// Render app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
