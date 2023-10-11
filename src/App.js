import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import { useEffect, useState } from 'react';
import getPlacesData from './api';

const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordnates] = useState({ lat: 0, lng: 0 });
    const [bounds, setBounds] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordnates({ lat: latitude, lng: longitude });
        })
    }
        , [])

    useEffect(() => {

        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                console.log(data);
                setPlaces(data);
            })
    }, [coordinates, bounds])

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map
                        setCoordinates={setCoordnates}
                        setBounds={setBounds}
                        coordinates={coordinates} />
                </Grid>
            </Grid>

        </>
    );
};

export default App;