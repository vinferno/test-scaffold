
import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

export default app;
