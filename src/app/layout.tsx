import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Hùng ♡ Kiều',
    description: 'Wedding invitation',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className}`}>
        {children}
        <img
            src="/banner-gallery.png"
            alt="banner"
            className="fixed top-0 -z-10 left-0 w-auto h-screen opacity-20 object-cover object-center"
        />
        </body>
        </html>
    )
}
