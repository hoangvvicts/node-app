import express from 'express';

const app = express();

const PORT = 8000;

app.get('/', (req, res) => res.send('The sailor Nodejs 3'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});