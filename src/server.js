const routes = require('./routes');
const Hapi = require('@hapi/hapi');

const init = async () => {
  // eslint-disable-next-line no-undef
  const env = process.env.NODE_ENV || 'development';
  const server = Hapi.server({
    port: 5000,
    host: env !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
