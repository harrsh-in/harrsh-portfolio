'use client';

import React from 'react';

import ContactUsForm from '@/app/contact-us/components/ContactUsForm';
import { useContactUs } from '@/app/contact-us/contexts/ContactUs.context';

const ContactUsSection = () => {
    const { email } = useContactUs();

    return (
        <div>
            <div>
                <h1>Contact Us</h1>
                <p>For any queries, please contact us</p>

                {email}
            </div>

            <ContactUsForm />
        </div>
    );
};

export default ContactUsSection;
