import express from 'express';
import "./models/relations.js";
import { connect} from './connection.js';

import router from './routes/routes.js'

const app = express();
const port = 3000;
connect();
app.use(express.json());

app.use(router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});