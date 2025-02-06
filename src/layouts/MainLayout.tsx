import { Outlet, NavLink } from 'react-router-dom'
import { Suspense } from 'react'
import Button from '@/components/Button'
import { Text } from '@/components/Text'
export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow">
        <nav className="container mx-auto px-4 py-6">
          <ul className="flex gap-8">
            <li>
              <Button>
              <NavLink 
                to="/" 
                className={({ isActive }) => `${isActive ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500`}
              >
                <Text>Home</Text>
              </NavLink>
              </Button>
            </li>

          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
} 