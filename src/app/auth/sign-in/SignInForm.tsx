'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

const SignInForm = ({ csrfToken }: SignInFormProps) => {
    const router = useRouter();

    const [formValues, setFormValues] = useState({
        username: '',
        password: '',
    });

    const { mutate, isPending } = useMutation({
        mutationKey: ['signIn', formValues],
        mutationFn: () =>
            signIn('credentials', {
                redirect: false,
                username: formValues.username,
                password: formValues.password,
            }),
        onSuccess: (data) => {
            console.log(data);
            if (!data) {
                return;
            }

            if (!data.ok) {
                toast.error(data.error);
                return;
            }

            console.log('Signed in');
            window.history.replaceState(null, '', '/app/dashboard');
            router.push('/app/dashboard');
        },
        onError: (error) => {
            console.error('Failed to sign in');
            console.log(error);
        },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
    };

    return (
        <div>
            {isPending ? <p>Loading...</p> : null}
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name='csrfToken'
                    type='hidden'
                    defaultValue={csrfToken}
                />
                <label>
                    Username
                    <input
                        name='username'
                        type='text'
                        value={formValues.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password
                    <input
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>Sign In</button>
            </form>
        </div>
    );
};

export default SignInForm;

interface SignInFormProps {
    csrfToken: string;
}
