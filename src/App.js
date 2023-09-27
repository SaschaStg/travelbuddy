import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Map />
                </Grid>
            </Grid>

        </>
    );
};

export default App;