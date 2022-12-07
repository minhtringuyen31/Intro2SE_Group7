const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello word');
});

app.listen(port, () => console.log(`Listening to hhman port http://localhost:${port}`));


