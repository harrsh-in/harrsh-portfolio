import PublicLayout from '@/components/PublicRoute';

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
