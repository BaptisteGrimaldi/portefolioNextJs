import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBarGlobal from '@/components/navBar/NavBarGlobal';
import PopUp from '@/components/popUp/PopUp';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portefolio Baptiste Grimaldi',
    description: 'Portefolio Baptiste Grimaldi',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NavBarGlobal />
                <PopUp />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
