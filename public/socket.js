import { updateTextEditor } from './document.js';

const socket = io();

function emitTextEditor(text) { socket.emit('editor_de_texto', text); }

socket.on('editor_de_texto_client', text => updateTextEditor(text));

export { emitTextEditor };