import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('hello there friend');
});

const port = 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});