import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-651d0-default-rtdb.firebaseio.com/'
});

export default instance;