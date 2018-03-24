const express = require('express')
const http = require('http')
const path = require('path')
var proxy = require('express-http-proxy')
const app = express()

app.use('/api', proxy('https://quick-pollster.herokuapp.com'))

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || '4201';

app.set('port', port);

const server = http.createServer(app);
server.listen(port, ()=>{console.log('Running')});