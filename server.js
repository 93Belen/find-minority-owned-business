import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';


const app = express();

app.use(express.static('docs'));


app.get('/', (req, res) => {
    res.sendFile('docs')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening at ${port}`));


app.get('/api/:city/:term/:owner', async (req, res) => {
    const city = req.params.city;
    const term = req.params.term;
    const owner = req.params.owner;
    const api_key = process.env.API_KEY;
    const fetchApi = await fetch(`https://api.yelp.com/v3/businesses/search?location=${city}&term=${owner}+${term}&radius=9000&sort_by=rating`, {
         method: 'GET',
         headers: {
              Authorization : process.env.API_KEY
         }
    });
    const apiResponse = await fetchApi.json();
    console.log(apiResponse);
    res.json(apiResponse);
})

