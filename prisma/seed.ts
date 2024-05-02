import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const user1 = await prisma.user.create({
    data: {
      name: 'Carla Fernández',
      email: 'carla.fernandez@gmail.com',
      password: '1234',
      reviews: {
        create: [
          {
            content: 'Great movie!',
            score: 5,
          },
          {
            content: 'Could be better...',
            score: 3,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Olivia Rodrigo',
      email: 'olivia.rodrigo3@gmail.com',
      password: '5678',
      reviews: {
        create: [
          {
            content: 'Awesome film!',
            score: 4,
          },
        ],
      },
    },
  });

  const movie1 = await prisma.movie.create({
    data: {
      title: 'Inception',
      description: 'A science fiction action film about dream infiltration.',
      reviews: {
        create: [
          {
            content: 'Mind-bending!',
            score: 5,
            userId: user1.id,
          },
          {
            content: 'A masterpiece!',
            score: 5,
            userId: user2.id,
          },
        ],
      },
    },
  });

  console.log('Data seeded successfully!');
}

await main();
await prisma.$disconnect();
