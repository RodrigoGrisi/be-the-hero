const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'semanaOministack 11.0',
        Aluno: 'Rodrigo Grisi'

    })
});

app.listen(3333);