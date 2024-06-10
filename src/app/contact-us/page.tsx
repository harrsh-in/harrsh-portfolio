import type { Metadata } from 'next';
import ContactUsSection from '@/app/contact-us/components/ContactUs.section';
import { ContactUsProvider } from '@/app/contact-us/contexts/ContactUs.context';
import PublicLayout from '@/components/PublicRoute';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Fullstack developer, designer, and creator.',
};

const ContactUsPage = () => {
    return (
        <ContactUsProvider>
            <ContactUsSection />
        </ContactUsProvider>
    );
};

const ContactUs = () => {
    return (
        <PublicLayout>
            <ContactUsPage />
        </PublicLayout>
    );
};

export default ContactUs;
