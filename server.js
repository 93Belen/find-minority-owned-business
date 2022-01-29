import express from 'express';
import fetch from 'node-fetch';

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('public')
});


app.listen(3000, () => console.log('Listening at 3000'));


app.get('/api', async(req, res) => {
    const fetchApi = await fetch('https://api.yelp.com/v3/businesses/search?location=Kansas', {
         method: 'GET',
         headers: {
              Authorization : 'aqui va api key'
         }
    });
    const apiResponse = await fetchApi.json();
    res.json(apiResponse); 
})

