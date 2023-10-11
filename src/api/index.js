import axios from 'axios';

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
        //currency: 'EUR',
        //lunit: 'km',
        //lang: 'de_DE'
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};


const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(url, options);
        return data;
    } catch (error) {
        console.log(error)
    }

}

export default getPlacesData;