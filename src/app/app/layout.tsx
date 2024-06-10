'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedLayoutProps {
    children: ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({
            redirect: false,
        });
        window.history.replaceState(null, '', '/');
        router.push('/');
    };

    useEffect(() => {
        if (status === 'loading') {
            return;
        }

        if (!session) {
            router.push('/auth/sign-in');
        }
    }, [session, status, router]);

    if (status === 'loading' || !session) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <header>
                <nav>
                    <Link href={'/app/dashboard'}>Dashboard</Link>

                    <button onClick={handleSignOut}>Logout</button>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default ProtectedLayout;
