const request = require('supertest');

const app = require('../src/app');


test('Deve listar todos os usuários', () => {
    return request(app).get('/user')
        .then(res => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name', 'Silvio');
        });
});