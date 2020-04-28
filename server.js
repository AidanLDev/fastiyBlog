const fastify = require('fastify')({ logger: true })
const path = require('path')

//  Register fastify-static plugin
fastify.register(require('fastify-static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

fastify.get('/', async (req, res) => {
  res.sendFile('index.html')
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
