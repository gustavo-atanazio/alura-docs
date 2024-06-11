import io from './server';

io.on('connection', socket => {
    console.log(`Usuário conectado. ID: ${socket.id}`);

    socket.on('editor_de_texto', text => {
        socket.broadcast.emit('editor_de_texto_client', text);
    });
});