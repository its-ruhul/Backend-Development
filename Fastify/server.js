const fastify = require('fastify')({ logger: true });

//Plugins need to be registered
// fastify.register(require('fastify-swagger'), {
//   exposeRoute: true,
//   routePrefix: '/docs',
//   swagger: {
//     info: {title: 'fastify-api'},
//   }
// });
fastify.register(require('./routes/items'));


const PORT = 5000;

const start = async() => {
  try{
    await fastify.listen({port: PORT});
  } catch(error){
    fastify.log.error(error);
    process.exit(1);
  }
}

start();