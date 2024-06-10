import PublicLayout from '@/components/PublicRoute';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Harrsh',
    description: 'Fullstack developer, designer, and creator.',
};

const HomePage = () => {
    return <div>Hello world!!</div>;
};

const Home = () => {
    return (
        <PublicLayout>
            <HomePage />
        </PublicLayout>
    );
};

export default Home;
