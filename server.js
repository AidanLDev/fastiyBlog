const fastify = require('fastify')({ logger: true })

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    //  Requests need querystring with a name parameter
    querystring: {
      name: { type: 'string' },
    },
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
          hi: { type: 'string' }
        }
      }
    }
  },
  //  This function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    //  e.g. Check auth
  },
  handler: async (request, reply) => {
    return { hello: 'world', hi: 'mars' }
  }
})


const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log(err)
    process.exit(1)
  }
};

start();