// const { catRoutes } = require('./cats.js');
const staticR = require('./staticFilesRoute.js');


// const routes = {
//   cats: catRoutes,
// };


const app = async (req, res) => {
  const staticy = await staticR(req);
  console.log('thisone', staticy);
  if(staticy){
    res.statusCode = 200;
    res.end(staticy);
    return;
  } 
  
  res.statusCode = 404;
  res.end('404 NOT FOUND');
};

module.exports = app;

// const app = async (req, res) => {
//   const [, resource] = req.url.split('/');
//   const route = routes[resource];

//   if(route) {
//     try {
//       const routeHandler = route[req.method.toLowerCase()];
//       module.exports = routeHandler;

//       await routeHandler(req, res);
//     } catch (error) {
//       res.statusCode = 500;
//       res.end('Internal Server Error');
//     }
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>Not Found</h1></body></html>');
//   }

// };
