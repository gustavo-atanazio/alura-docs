import { emitTextEditor } from './socket.js';

const textEditor = document.getElementById('editor-texto');

textEditor.addEventListener('keyup', () => emitTextEditor(textEditor.value));

function updateTextEditor(text) { textEditor.value = text; }

export { updateTextEditor };