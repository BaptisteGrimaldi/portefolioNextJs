import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBarGlobal from '@/components/navBar/NavBarGlobal';
import PopUp from '@/components/popUp/PopUp';
import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portfolio Baptiste Grimaldi',
    description: 'Portfolio Baptiste Grimaldi',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NavBarGlobal />
                <PopUp />
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
