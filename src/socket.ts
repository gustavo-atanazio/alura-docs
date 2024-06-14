import io from './server';
import { findDocument, updateDocument } from './documentsDB';

type EditorDeTexto = {
    text: string;
    documentName: string;
};

io.on('connection', socket => {
    console.log(`Usuário conectado. ID: ${socket.id}`);

    socket.on('selecionar_documento', async (documentName: string, retrieveText: (text: string) => void) => {
        socket.join(documentName);
        const document = await findDocument(documentName);

        if (document) retrieveText(document.text);
    });

    socket.on('editor_de_texto', async ({ text, documentName }: EditorDeTexto) => {
        const update = await updateDocument(documentName, text);

        if (update && update.modifiedCount) {
            socket.to(documentName).emit('editor_de_texto_client', text);
        }
    });
});