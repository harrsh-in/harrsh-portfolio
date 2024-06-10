import { getCsrfToken } from 'next-auth/react';
import SignInForm from '@/app/auth/sign-in/SignInForm';

const SignInPage = async () => {
    const csrfToken = await getCsrfToken();

    return <SignInForm csrfToken={csrfToken ?? ''} />;
};

export default SignInPage;
