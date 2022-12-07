const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 3000;

// use Module Morgan 
app.use(morgan('tiny'));

// use helmet
app.use(helmet());

// use cors
app.use(cors());

app.get('/', (req, res) => {
    return res.send('Hello word');
});

app.listen(port, () => console.log(`Listening to hhman port http://localhost:${port}`));


// What api ?

/**
 * Folder Structure:
 * src:
 *  Router
 *  Controller:
 *  Service:
 *  Model
 *  Content-path:
 *      api
 *  Document: 
 */


