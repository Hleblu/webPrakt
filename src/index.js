import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url.replace(/\/$/, '');

    let filePath = '';
    
    if (url === '/home' || url === '') {
        filePath = 'src/home.html';
    } else if (url === '/contacts') {
        filePath = 'src/contacts.html';
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Error code 404: Page not found');
        return;
    }

    fs.readFile(path.resolve(filePath), (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Error code 500: Server error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.write(data);
            res.end();
        }
    });
});

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});