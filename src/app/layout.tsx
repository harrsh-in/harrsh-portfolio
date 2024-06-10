'use client';

import { Poppins } from 'next/font/google';
import './globals.css';
import React from 'react';
import SessionProviderWrapper from '@/components/SessionProviderWrapper';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({
    subsets: ['latin'],
    preload: true,
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const queryClient = new QueryClient();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <QueryClientProvider client={queryClient}>
                    <SessionProviderWrapper>{children}</SessionProviderWrapper>

                    <ReactQueryDevtools initialIsOpen={false} />
                    <ToastContainer
                        draggable
                        pauseOnHover
                        closeOnClick
                        position='top-right'
                        theme='dark'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        rtl={false}
                        pauseOnFocusLoss={false}
                        transition={Bounce}
                    />
                </QueryClientProvider>
            </body>
        </html>
    );
}
