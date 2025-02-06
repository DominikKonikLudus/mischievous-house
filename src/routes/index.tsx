import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

// Layout
import MainLayout from '../layouts/MainLayout'

// Lazy load pages
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Pricing = lazy(() => import('@/pages/Pricing'))
const Contact = lazy(() => import('@/pages/Contact'))


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
        path: 'about',
        element: <About />
      },
      {
        path: 'pricing',
        element: <Pricing />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]) 