const API_KEY = 'cwBYPNZIxeLQ9uJQDgdS1NHoYjkYKhnqQL0LSKbE';
const url = `https://api.nasa.gov/planetary/apod`;

export default async (urlParams?: String) => {
    try {

        let params = '';

        if(typeof urlParams !== 'undefined' && urlParams.length > 0) {
            params = urlParams.toString();
        }

        const response = await fetch(`${url}?api_key=${API_KEY}${params}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch (err) {
        return Promise.reject(err);
    }
}