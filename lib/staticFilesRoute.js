const { readFile } = require('fs/promises');
const { path } = require('path');

// const htmlRoute = '../public/index.html';
const staticR = async (req) => {
  if(req.method !== 'GET') return null;
    
  try{
    const filePath = path.join('../public', '/index.html');
    return await readFile(filePath, 'utf-8');
  }catch(error){
    return error;
  }
};

module.exports = staticR;

