/**
 * This file contains the logic for implementing next-auth in the application.
 * */
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { get } from 'lodash';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                try {
                    const userDataResponse = await axios.post(
                        'https://dummyjson.com/auth/login',
                        {
                            ...credentials,
                            username: 'emilys',
                            password: 'emilyspass',
                        },
                    );
                    const userData = userDataResponse.data;

                    if (!userData) {
                        return;
                    }

                    return userData;
                } catch (error) {
                    console.error('Failed to authenticate:', error);

                    let errorMessage: string = get(
                        error,
                        'response.data.message',
                        '',
                    );
                    if (!errorMessage) {
                        errorMessage = get(error, 'message', '');
                    }
                    throw new Error(errorMessage);
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: '/auth/sign-in',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
