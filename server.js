import express from 'express';

const app = express();

const port = 2000;

app.use(express.static('public'));

app.listen(port, () => console.log('Listening to port: ', port));
