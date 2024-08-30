import {useEffect} from 'react';
import axios from 'axios';


const MyComponent = () => {
    useEffect(() => {
        
        const jwtToken = sessionStorage.get('jwtToken_key');

        const axiosInstance = axios.create({
            baseURL: 'https://api.example.com',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });

        axiosInstance.get('/some/api/endpoint')
        .then(response => {
            console.log('Data:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, []);

    return (
        {/*Component*/}
    );
};

export default MyComponent