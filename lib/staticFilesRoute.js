const { readFile } = require('fs/promises');
const  path  = require('path');

// const htmlRoute = '../public/index.html';
async function staticR(req){
  if(req.method !== 'GET') return null;
  const URL = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, '../public', URL);
  try{
    return await readFile(filePath, 'utf-8');
  }catch(err){
   
    return null;
  }
}

module.exports = staticR;

