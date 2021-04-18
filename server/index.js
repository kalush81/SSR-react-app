import express from 'express';
import { readFileSync } from 'fs';

const app = express();

app.use(express.static('dist'))

app.get('/', (req, res) => {
    const index = readFileSync('public/index.html', "utf8")
    res.send(index)
})

app.listen(3001, () => {console.log('server is listening')})