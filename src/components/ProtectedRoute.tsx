'use client';

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { data: session, status } = useSession();
    const router = useRouter();

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

                    <button onClick={() => signOut()}>Logout</button>
                </nav>
            </header>

            <main>{children}</main>
        </div>
    );
};

export default ProtectedRoute;
