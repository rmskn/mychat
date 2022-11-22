const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {}
});

let users = [];
let threads = [];
let messages = [];


//Create user
app.post('user', (req, res) => {
    let user = {
        username: req.data.username,
        userId: randomId(),
    };

    users[user.userId] = user;
    res.send(JSON.stringify(user));
});

//Get user
app.get('user', (req, res) => {
    if (users[req.userId]) {
        res.send(JSON.stringify(users[req.userId]));
    } else {
        res.fail();
    }
});

//Create thread
app.post('thread', (req, res) => {
    let thread = {
        id: randomId(),
        userId1: req.data.userId1,
        userId2: req.data.userId2,
    };

    threads[thread.id] = thread;
    res.send(JSON.stringify(thread));
});

//Get all threads
app.get('threads', (req, res) => {
    if (users[req.data.userId]) {
        res.send(JSON.stringify(getThreadsByUserId(req.data.userId, threads)));
    } else {
        res.fail();
    }
});

//Get thread
app.get('thread', (req, res) => {
    if (threads[req.data.threadId]) {
        let thread = threads[req.data.threadId];
        let threadWithMessages = {
            id: req.data.threadId,
            userId1: thread.userId1,
            userId2: thread.userId2,
            messages: getMessagesByThread(req.data.threadId, messages),
        }

        res.send(JSON.stringify(threadWithMessages));
    } else {
        res.fail();
    }
});

//Create message
app.post('message', (req, res) => {
    let message = {
        id: randomId(),
        userId: req.data.userId,
        threadId: req.data.threadId,
        text: req.data.text,
    }

    messages[message.id] = message;

    res.send(getMessagesByThread(req.data.threadId, messages));
});

//Get messages by thread
app.get('messages', (req, res) => {
    res.send(getMessagesByThread(req.data.threadId, messages));
});

io.on('connection', (socket) => {
    console.log('Some User Is Connected');
});

http.listen(3000, () => {
    console.log('Listening On *:3000');
});

function randomId() {
    return "" + randomDigit() + randomDigit() + randomDigit() + randomDigit();
}

function randomDigit() {
    return Math.floor(9 * Math.random());
}

function getMessagesByThread(threadId, messages) {
    return messages.filter((message) => {
        return message.threadId === threadId;
    });
}

function getThreadsByUserId(userId, threads) {
    return threads.filter((thread) => {
        return thread.userId === userId;
    });
}
