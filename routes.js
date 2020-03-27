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
        });
    });
    //add a brom
    app.post('/brom', (request, response) => {
        pool.query('INSERT INTO bromileys SET ?', request.body, (error, result) => {
            if(error) throw error;
            response.status(201).send(`Brom added with ID: ${result.insertId}`);
        });
    });
    //update an existing brom
    app.put('/brom/:id', (request, response) => {
        const id = request.params.id;
        pool.query('UPDATE bromileys SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if(error)throw error;
            response.send('Brom updated successfully');
        });
    });
    //delete a brom
    app.delete('/brom/:id', (request, response) => {
        const id = request.params.id;
        pool.query('DELETE FROM bromileys WHERE id = ?', id, (error, result) => {
            if(error) throw error;
            response.send('Brom deleted :(');
        });
    });
}

//export the router
module.exports = router;