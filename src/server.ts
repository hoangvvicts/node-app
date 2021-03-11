import express from 'express';

const app = express();

const PORT = 80;

app.set('view engine', 'ejs');

app.set('views', './src/views');

app.get('/', (req, res) => res.render('index.ejs'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});