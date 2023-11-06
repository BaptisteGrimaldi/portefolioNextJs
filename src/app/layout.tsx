import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBarBureau from '../components/navBar/NavBarBureau';
import NavBarPhone from '@/components/navBar/navBarPhone';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Portefolio Baptiste Grimaldi',
    description: 'Portefolio Baptiste Grimaldi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={inter.className}>
                <NavBarBureau visible={true} />
                <NavBarPhone visible={false} />
                {children}
            </body>
        </html>
    );
}
