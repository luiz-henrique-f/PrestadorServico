import { NextAuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import "./globals.css";
import Providers from './data/context/ThemeProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Providers>
          <body className={inter.className}>
            <NextAuthProvider>
              <Header />
              {children}
            </NextAuthProvider>
            </body>
            </Providers>
    </html>
  )
}
