import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID c0142360225f0157c041888120fbe7b6198996d158e5d865172bbbbaf2f4ed52'
    }
});