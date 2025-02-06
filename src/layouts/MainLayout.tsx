import { Outlet, NavLink } from 'react-router-dom'
import { Suspense } from 'react'


export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex gap-8">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pricing" 
                className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
} 