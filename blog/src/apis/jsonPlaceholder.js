import axios from 'axios';

const jsonPlaceholder = axios.create({
    baseURl: 'https://jsonplaceholder.typicode.com'
});

export default jsonPlaceholder;