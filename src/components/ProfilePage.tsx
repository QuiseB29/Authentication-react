import {useAuth0} from '@auth0/auth0-react';
import PageLayout from '../components/PageLayout';
import {Col} from 'react-bootstrap';
import React from 'react';


const ProfilePage: React.FC = () => {
    const {user, isAuthenticated, getAccessTokenSilently } = useAuth0();

    if(!isAuthenticated){
        return <div>Not Authenticated</div>
    }

    if(!user){
        return <div>No user Profile</div>
    }

    getAccessTokenSilently().then(token => console.log('token', token))

    return (
        <PageLayout>
            <h1>Profile Page</h1>
            <Col>
                {user?.picture && <img src={user.picture} alt={user.name} />}
                <h2>{user.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, index) => <li key={index}>{objKey}:{user[objKey]}</li>)}
                </ul>
            
            </Col>
        </PageLayout>
    );
};

export default ProfilePage