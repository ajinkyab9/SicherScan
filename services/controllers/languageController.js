import prisma from "../config/db.js";

export default async function getLanguages(req, res) {
  try {
    const languageRecords = await prisma.language.findMany({
      select: {
        langName: true,
      },
    });
    const langArray = languageRecords.map((record) => record.langName);
    return res.status(200).json(langArray);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch options" });
  }
}