import { Prisma } from "@prisma/client";
import prisma from "../config/db.js";



const createScanPayload = async (req, res) => {

    try{

    //1 Extract and validate data from req.body
    
    const { userName, codeSnippet } = req.body;

    if (!userName || !codeSnippet){
        return res.status(400).json({
            success: false,
            message: "Missing required fields: userName and codeSnippet are mandatory."
        })
    }

    //2 Perform Prisma DB operations
     const newCodeScan = await prisma.scan.create({ 
        data: {
            userName: userName,
            codeSnippet: codeSnippet
        }
      });

    //3 Return success response
    res.status(202).json({ success: true, data: newCodeScan });

    } catch (error) {
        console.error("Error create the scan payload", error);

        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2025') {
                return res.status(404).json({
                    success: false,
                    message: "Scan record not found in the database."
                });
            }

            return res.status(400).json({
                success: false,
                message: "Database operation failed due to invalid data."
            });
        }

        // Fallback: If it's a completely unexpected server crash
        res.status(500).json({
          success: false,
          message: "An internal server error occurred."
         });
    }
};

export default createScanPayload;