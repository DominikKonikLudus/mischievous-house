import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Background from '@/components/Background';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Background count={30} minSize={80} maxSize={100} />

      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
