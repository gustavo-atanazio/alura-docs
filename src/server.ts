import url from 'url';
import path from 'path';
import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();
const PORT = process.env.PORT || 5000;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDirectory = path.join(currentPath, '../..', 'public');

app.use(express.static(publicDirectory));

const HTTPServer = http.createServer(app);

HTTPServer.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}.`));

const io = new Server(HTTPServer);

export default io;