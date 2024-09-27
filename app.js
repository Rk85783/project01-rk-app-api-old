import 'dotenv/config';
import express from 'express';
const app = express();

const port = process.env.APP_PORT || 4001

app.use(express.json());

app.get('/api', (req, res) => {
  return res.send("API works!");
});

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} is running at http://localhost:${port}`);
});