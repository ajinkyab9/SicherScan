import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
    adapter,
})

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


 app.get("/health", async (req, res) => {
     try {
         await prisma.$queryRaw`SELECT 1`;
         res.json({status: "ok", db: "db connection successful"});
     } catch (err) {
         console.log(err);
         res.status(500).json({status: "error", db: "disconnected"});
     }
 });
 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
