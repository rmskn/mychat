const app = require('express')();
const http = require('http').createServer(app);
const { Server } = require('socket.io');
const io = new Server(http);

app.get('/', (req, res) => res.send('Hello Test Server!'));

io.on('connection', (socket) => {
    console.log('Some User Is Connected');
});

http.listen(3000, () => {
    console.log('Listening On *:3000');
});
