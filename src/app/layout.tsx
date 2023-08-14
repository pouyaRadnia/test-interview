import './globals.css';
import DashboardHeader from '@/components/DashboardHeader';
import { ReduxProvider } from '@/store/provider/redux-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <div>
                        <DashboardHeader />
                    </div>

                    <div>{children}</div>
                </ReduxProvider>
            </body>
        </html>
    );
}
