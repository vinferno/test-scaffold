
import app from './app.js';
import http from 'http';
const server = http.createServer(app);
server.listen(3000, () => {
    console.log(`Server started. Listening on http://localhost:3000`);
});

export default server;
