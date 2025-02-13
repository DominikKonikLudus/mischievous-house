import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Background from '@/app/_components/Background/Background';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PSOTNY DOMEK',
  description: 'Radosna domowa opieka zwierząt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Background count={30} minSize={80} maxSize={100} />
        <main className="min-h-screen flex flex-col">
          <div className="flex-1 container mx-auto px-4 py-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
