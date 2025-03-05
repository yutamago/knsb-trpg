import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get('/rooms', async function () {
    return {
      rooms: [
        {
          id: 'c72e21ce-dcab-4086-898d-92464b8a3d11',
          state: 1,
          players: 3,
        },
      ],
    };
  });
}
