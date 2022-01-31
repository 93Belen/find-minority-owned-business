import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('public')
});


app.listen(3000, () => console.log('Listening at 3000'));


app.get('/api/:city/:term', async (req, res) => {
    const city = req.params.city;
    const term = req.params.term;
    const fetchApi = await fetch(`https://api.yelp.com/v3/businesses/search?location=${city}&term=women-owned+${term}&radius=9000&sort_by=rating`, {
         method: 'GET',
         headers: {
              Authorization : ''
         }
    });
    const apiResponse = await fetchApi.json();
    console.log(apiResponse);
    res.json(apiResponse);
})

