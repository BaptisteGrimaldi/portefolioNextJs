import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '../../composants/navBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portefolio Baptiste Grimaldi',
    description: 'Portefolio Baptiste Grimaldi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
