const  request  = require('supertest');
const  app  = require('../lib/app.js');
const  { readFile }  = require('fs/promises');
// jest.setTimeout(10000);

describe('get static routes, return html from get', () => {
  it('should return index.html from GET /', async () => {
    
    const [res, index] = await Promise.all(
      [
        request(app).get('/'),
        readFile('./public/index.html', 'utf-8')
      ]); 
    expect(res.text).toEqual(index);
  });

  it('should return main.css from GET /CSS/main.css', async () => {
    const [res, index] = await Promise.all([
      request(app).get('/CSS/main.css'),
      readFile('./public/CSS/main.css', 'utf-8')
    ]);
    expect(res.text).toEqual(index);
  });

  it('should return 404 from GET /bad-file', async () => {
    const res = await request(app).get('/bad-file');
    //   readFile('./public/badfile', 'utf-8');
    // console.log(res.statusCode);
    expect(res.statusCode).toEqual(404);
  });

  it('should return 404 from GET folder of /styles', async () => {
    const res = await request(app).get('/styles');
    expect(res.statusCode).toEqual(404);
  });

});
