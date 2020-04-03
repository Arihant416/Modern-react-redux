import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e-9EfEuNY3evh9dcwr26PGll5HI1e1twXOua5FreKX4',
  },
});
