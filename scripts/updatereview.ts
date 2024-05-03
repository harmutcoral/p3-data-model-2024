import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updateReview = async () => {
    const user = await prisma.user.findFirst({ where: { name: "Carla Fernández" } });
    const series = await prisma.series.findFirst({ where: { title: "Breaking Bad" } });

    if (user && series) {
        const review = await prisma.review.findFirst({
            where: { userId: user.id, seriesId: series.id }
        });

        if (review) {
            await prisma.review.update({
                where: { id: review.id },
                data: {
                    content: "I changed my mind, it's not that good.",
                    score: 6
                }
            });

            console.log("Review updated successfully! :)");
        }
    }
};

await updateReview();
