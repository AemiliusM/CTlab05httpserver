const  request  = require('supertest');
const  app  = require('../lib/app.js');
const  { readFile }  = require('fs/promises');
const  path  = require('path');


describe('get static routes, return html from get', () => {
  it('should return index.html from GET /', async () => {
    const filePath = path.join('./public/', 'index.html');
    console.log(await readFile(filePath, 'utf-8'));
    const [res, index] = await Promise.all(
      [
        request(app).get('/'),
        readFile(filePath, 'utf-8')
      ]); 
    expect(res.text).toEqual(index);
  });
});
