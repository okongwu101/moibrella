
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'mobriella',
  description: 'daily weather companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-950`}>
        {children}
        
       
        </body>
    </html>
  )
}
