
import { Server } from 'socket.io';
import server from './server.js';
import { RES_CONNECT } from '../../test/public/js/actions.js';


const io = new Server(server);



io.on('connection', (entity) => {
   console.log('socket connected');
});

export default io;
