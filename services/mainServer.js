import dotenv from "dotenv";
dotenv.config();
import express from "express";
import scanRouter from "./routes/scanRoute.js";
import prisma from "./config/db.js";

const app = express();
app.use((req, res, next) => {
  console.log(`FRONT DOOR: ${req.method} request to ${req.url}`);
  next(); // Pass it to the next function
});
app.use(express.json());
app.use("/api/scans", scanRouter);
const PORT = process.env.PORT || 5000;

app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "db connection successful" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

async function gracefulShutdown(signal) {
  console.log(`\n[${signal}] signal received. Shutting down gracefully...`);

  server.close(async () => {
    console.log("Http server closed. No longer accepting requests.");

    try {
      await prisma.$disconnect();
      console.log("Database connection closed successfully.");

      process.exit(0);
    } catch (err) {
      console.log("Error during database disconnection:", err);

      process.exit(1);
    }
  });
  server.closeIdleConnections();
}

process.on("SIGINT", () => gracefulShutdown("SIGINT"));
process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
