import express from 'express';


const server = express();

interface Test {

}

server.get('/', (req, res) => {
  return res.send('Olá, Dev!');
});

export { server };