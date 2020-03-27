const pool = require('./data/config');

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Massage'
        });
    });
    app.get('/brom', (request, response) => {
        pool.query('SELECT * FROM bromileys', (error, result) => { 
            if (error) throw error;
            response.send(result);
        });
    });
    //display a single brom by id
    app.get('/brom/:id', (request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM bromileys WHERE id = ?', id, (error, result) => {
            if (error) throw error;
            response.send(result);
        })
    })
}

//export the router
module.exports = router;