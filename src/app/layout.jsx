import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import CustomCursor from '@/app/components/CustomCursor/CustomCursor';

import 'bootstrap/scss/bootstrap.scss';
import './globals.scss';

import { Figtree, Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

const figtree = Figtree({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-figtree',
    display: 'swap',
});

export const metadata = {
    title: 'Medies - Health & Medical React Next Js Template',
    description: 'Health & Medical React Next Js Template',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${figtree.variable}`}>
                <Header />
                {children}
                <Footer />
                <CustomCursor />
            </body>
        </html>
    );
}
