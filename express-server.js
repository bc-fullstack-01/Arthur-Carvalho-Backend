const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/posts', routes);

app.listen(4000, () => {
    console.log('server listen on http://localhost:4000');
});