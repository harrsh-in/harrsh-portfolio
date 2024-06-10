'use client';

import { ReactNode } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface PublicLayoutProps {
    children: ReactNode;
}

const PublicLayout = ({ children }: PublicLayoutProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        });
        window.history.replaceState(null, '', '/');
        router.push('/');
    };

    if (status === 'loading') {
        return;
    }

    return (
        <div>
            <header>
                <nav>
                    {status === 'authenticated' ? (
                        <>
                            <Link href={'/app/dashboard'}>Dashboard</Link>
                            <button onClick={handleSignOut}>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href={'/auth/sign-in'}>Sign In</Link>
                        </>
                    )}
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default PublicLayout;
