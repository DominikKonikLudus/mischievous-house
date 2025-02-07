import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

// Layout
import MainLayout from '../layouts/MainLayout'

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'))
const Debug = lazy(() => import('@/pages/Debug'))


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'debug',
        element: <Debug />
      }
    ]
  }

]) 