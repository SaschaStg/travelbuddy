import axios from 'axios';

const url = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";


const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(url, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                //currency: 'EUR',
                //lunit: 'km',
                //lang: 'de_DE'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });

        return data;

    } catch (error) {
        console.log(error)
    }

}

export default getPlacesData;