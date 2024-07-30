const API_KEY = 'Lye2kvFBGzvGQghi5UjcPXZt0LbIh8M584kr670w';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParams?: String) => {
    try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}${typeof urlParams !== 'undefined' && urlParams?.length > 0 ? urlParams : ''}`);

        const data = await response.json();

        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    };
};