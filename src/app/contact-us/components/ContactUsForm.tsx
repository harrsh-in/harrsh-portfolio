'use client';

import { useContactUs } from '@/app/contact-us/contexts/ContactUs.context';
import { FormEvent } from 'react';

const ContactUsForm = () => {
    const { handleSetEmail } = useContactUs();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = new FormData(event.currentTarget).get('email') as string;
        handleSetEmail(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />

            <button type='submit'>Submit</button>
        </form>
    );
};

export default ContactUsForm;
