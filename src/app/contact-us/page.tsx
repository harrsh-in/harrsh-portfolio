import type { Metadata } from 'next';
import ContactUsSection from '@/app/contact-us/components/ContactUs.section';
import { ContactUsProvider } from '@/app/contact-us/contexts/ContactUs.context';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Fullstack developer, designer, and creator.',
};

const ContactUs = () => {
    return (
        <ContactUsProvider>
            <ContactUsSection />
        </ContactUsProvider>
    );
};

export default ContactUs;
