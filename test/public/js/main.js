
import { RES_CONNECT } from "./actions.js";
const socket = io();

socket.on(RES_CONNECT, (data) => {
    console.log('connected', data);
});
