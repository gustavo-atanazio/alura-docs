import io from './server';

type EditorDeTexto = {
    text: string;
    documentName: string;
};

const documents = [
    {
        name: 'JavaScript',
        text: ''
    },
    {
        name: 'Node',
        text: ''
    },
    {
        name: 'Socket.io',
        text: ''
    }
];

function findDocument(name: string) {
    const document = documents.find(doc => doc.name === name);
    return document;
}

io.on('connection', socket => {
    console.log(`Usuário conectado. ID: ${socket.id}`);

    socket.on('selecionar_documento', (documentName, retrieveText) => {
        socket.join(documentName);
        const document = findDocument(documentName);

        if (document) retrieveText(document.text);
    });

    socket.on('editor_de_texto', ({ text, documentName }: EditorDeTexto) => {
        const document = findDocument(documentName);

        if (document) {
            document.text = text;
            socket.to(documentName).emit('editor_de_texto_client', text);
        }
    });
});