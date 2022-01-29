import express from 'express';
import fetch from 'node-fetch';

const app = express();
const router = express.Router();

app.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile('public')
});

app.listen(3000, () => console.log('Listening at 3000'));


