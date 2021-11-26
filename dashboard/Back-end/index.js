const express = require("express");
const app = express();

app.get('/', (res, resp) =>{
    console.log('servidorchamado');

    return resp.send('Hello');
});


app.listen(2525);