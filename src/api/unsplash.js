import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers : {
        Authorization: 'Client-ID thwp12BXXJhMcKDk7-bZ1M_TWKGmaC0E5vfvIbjwBII'
    }
});