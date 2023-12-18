"use client"

import { store } from '@/store/store'
import './globals.css'
import { Noto_Sans } from 'next/font/google'
import { Provider } from 'react-redux'

const notoSans = Noto_Sans({ subsets: ['cyrillic-ext'], weight: ['400', '300', '500', '700'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
