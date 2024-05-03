import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const addUsers = async () => {
    
    const user1 = await prisma.user.create({
        data: {
            name: 'Marta Ribas',
            email: 'marta.ribas@gmail.com',
            password: '1111',
        }
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'Paola Sánchez',
            email: 'paola.sanchez22@gmail.com',
            password: '2222',
        }
    });

    const user3 = await prisma.user.create({
        data: {
            name: 'Virginia Sanz',
            email: 'vir.sanz95@gmail.com',
            password: '3333',
        }
    });

    console.log("Users added successfully! :)");
};

await addUsers();
