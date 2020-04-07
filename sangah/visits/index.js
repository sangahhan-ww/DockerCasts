import express from 'express';
import redis from 'redis';
import process from 'process';

const app = express();
const client = redis.createClient({
    host: 'redis-server', //works because docker sets up redis-server host
    port: 6379 //default port
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send(`Number of visits is ${visits}.`)
        client.set('visits', parseInt(visits) + 1)
    })
});

const port = 8081;
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

