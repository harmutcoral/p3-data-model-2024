import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteData = async () => {
    await prisma.review.deleteMany();
    await prisma.user.deleteMany();
    await prisma.movie.deleteMany();
};
console.log("Data deleted successfully! :)")

await deleteData();
