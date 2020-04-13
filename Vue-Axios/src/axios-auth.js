import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://vuejs-axios-authenticati-86fb7.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;