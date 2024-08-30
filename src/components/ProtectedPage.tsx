import PageLayout from "./PageLayout";
import React from "react";

const ProtectedPage: React.FC = () => {
    return (
        <PageLayout>
            <h1>Protected Page</h1>
        </PageLayout>
    );
};

export default ProtectedPage