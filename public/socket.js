import { updateTextEditor } from './document.js';

const socket = io();

function selectDocument(name) {
    socket.emit('selecionar_documento', name, text => updateTextEditor(text));
}

function emitTextEditor(data) {
    socket.emit('editor_de_texto', data.text, data.documentName);
}

socket.on('editor_de_texto_client', text => updateTextEditor(text));

export { emitTextEditor, selectDocument };