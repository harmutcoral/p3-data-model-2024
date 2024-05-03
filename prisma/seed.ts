import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const user1 = await prisma.user.create({
    data: {
      name: 'Carla Fernández',
      email: 'carla.fernandez@gmail.com',
      password: '1234',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Olivia Rodrigo',
      email: 'olivia.rodrigo3@gmail.com',
      password: '5678',
    },
  });


  const movie1 = await prisma.movie.create({
    data: {
      title: 'Inception',
      description: 'A science fiction action film about dream infiltration.',
      genre: ['Sci-Fi', 'Thriller']
    },
  });

  const movie2 = await prisma.movie.create({
    data: {
      title: 'Poor things',
      description: 'A mysterious woman challenges societal norms and scientific ethics in a divided future society',
      genre: ['Sci-Fi', 'Drama' ]
    },
  });

  const series1 = await prisma.series.create({
    data: {
      title: 'Breaking Bad',
      description: 'A high school chemistry teacher turned into a methamphetamine manufacturer.',
      genre: ['Drama']
    },
  });

  const game1 = await prisma.game.create({
    data: {
      title: "Baldur's Gate 3",
      description: 'A group of adventurers start a journey through a world on the brink of chaos in an epic role-playing video game.',
      genre: ['RPG', 'Role', 'Adventure'],
    },
  });


  await prisma.review.createMany({
    data: [
      {
        content: 'Mind-bending!',
        score: 9,
        userId: user1.id,
        movieId: movie1.id,
      },
      {
        content: 'A gripping ethical dilemma.',
        score: 8,
        userId: user2.id,
        movieId: movie2.id,
      },
      {
        content: 'Amazing series!',
        score: 7,
        userId: user1.id,
        seriesId: series1.id,
      },
      {
        content: 'One of the best!',
        score: 10,
        userId: user2.id,
        gameId: game1.id,
      },
    ],
  });

  console.log('Data seeded successfully! :)');
}

await main()

