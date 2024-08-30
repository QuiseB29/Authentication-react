import { useAuth0 } from '@auth0/auth0-react';
import PageLayout from './PageLayout';
import React from 'react';

const CallbackPage: React.FC = () => {
    const { error } = useAuth0();

    if (error) {
        return <div>oops...{error.message}</div>;
    }

    return (
        <PageLayout>
            <h1>Call back Page</h1>
        </PageLayout>
    );
};

export default CallbackPage;