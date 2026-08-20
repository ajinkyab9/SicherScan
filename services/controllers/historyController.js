import prisma from "../config/db.js";

export default async function getHistoricalRecords(req, res) {
  try {
    const historicalRecords = await prisma.scan.findMany({
      select: {
        id: true,
        codeLang: true,
        createDate: true,
        status: true,
        vulnerabilities: {
          select: {
            vulType: true,
            severity: true,
            cvssBaseScore: true,
          },
        },
      },
    });
    return res.status(200).json(historicalRecords);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch historical records." });
  }
}