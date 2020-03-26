//test variable
const bromileys = [
    {
        id: 1,
        name: "Brongiley"
    },
    {
        id: 2,
        name: "Vroooooomiley"
    }
];

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Massage'
        });
    });
    app.get('/brom', (request, response) => {
        response.send(bromileys);
    });
}

//export the router
module.exports = router;