const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

// use Module Morgan 
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    return res.send('Hello word');
});

app.listen(port, () => console.log(`Listening to hhman port http://localhost:${port}`));


