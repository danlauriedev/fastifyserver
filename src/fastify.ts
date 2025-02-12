import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { fixtureData } from './mockData/fixtureData';

const server: FastifyInstance = Fastify({
  logger: true
});

server.get('/scores', async (request, reply) => {
  try {
    return fixtureData;
  } catch (err) {
    server.log.error(err);
    return err;
  }
});

export const buildFastify = async (): Promise<FastifyInstance> => {
  try {
    await server.listen({ port: 3000 });
    console.log(`server listening on ${JSON.stringify(server.server.address())}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
  return server;
};
buildFastify();
