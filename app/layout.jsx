import React from 'react'
import './tailwind.css'
import NavigationBar from '@/components/NavigationBar'
import LandingPage from '@/components/LandingPage'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar/>
        <div>
        {children}
        </div>
     </body>
    </html>
  )
}
