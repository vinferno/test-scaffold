
export const phases = ['mafia', 'doctor', 'sheriff', 'day'];
export let phaseIndex = 0;

export const game = {
  ids: [],
  players: {

  },
}

export class Player {
    username = '';
    id = '';
    role = '';
    constructor({id, username}){
        this.id = id;
        this.username = username;
    }

}
  
export const roles = [
'mafia', 'mafia', 'sheriff', 'doctor'
];

export function getRoles(role) {
return game.ids.filter(username => game.players[username].role === role).map(username => ({id: game.players[username].id, username: game.players[username].username}));
}
  
export class GameService {
    static startGame() {
        game.ids.sort((a, b) => {
            return Math.random() - 0.5;
        });

        game.ids.forEach((username, index) => {
            game.players[username].role = roles[index] ? roles[index] : 'civilian';
            io.to(game.players[username].id).emit('role', game.players[username].role);
        });
    }
    static getCivilians() {
        return getRoles('civilian').concat(getRoles('doctor'), getRoles('sheriff')).sort((a, b) => { return Math.random() - 0.5 })
    }

    static getAllPlayers() {
        return game.ids.map(username => game.players[username]);
    }

    static getPlayerBySocket(id) {
        return this.getAllPlayers().find(player => player.id === id);
    }
  
    static addPlayer(username) {
        const player = new Player({
            username,
            id: socket.id,
        });
  
        console.log(player);
        game.players[username] = player;
        game.ids.push(username);
    }
}
  
