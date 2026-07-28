import os
import httpx
import json
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel

load_dotenv()
app = FastAPI()

class CodePayLoad(BaseModel):
    code: str

@app.post("/scan")
async def scan_code(payload: CodePayLoad):
    llmPrompt = f"""Analyse the following code for security vulnerabilities. You should list all the vulnerabilities that you find in the code.
    You MUST return the output exclusively as a valid JSON object. Do not include markdown formatting or extra text. 
    Use this exact structure:
    {{
        "total_vulnerabilities": <integer representing the total count>,
        "vulnerabilities": [
            {{
                "type": "Name of vulnerability (e.g., SQL Injection)",
                "severity": "High, Medium, Low",
                "CVSS_base_score": "Estimated CVSS score from 1.0 to 10.0",
                "description": "Brief explanation and fix",
                "recommended_fix": {{
                    "describe_changes": "Describe the changes that you made",
                    "fixed_code": "Just output the code here, nothing else"
                }}
            }}
        ]
    }}
    
    Code to analyse: {payload.code}"""
    apiUrl = os.getenv("LLM_API_URL")
    llmModel = os.getenv("LLM_MODEL")
    async with httpx.AsyncClient() as client:
       llmResponse = await client.post(
           apiUrl,
           json = {
               "model": llmModel,
               "messages": [
                   {
                    "role": "user",
                    "content": llmPrompt
                   }
               ],
               "temperature": 0.0,
               "response_format": {"type": "json_object"}
           },
            timeout = 120.0
        )
       receivedData = llmResponse.json()
       aiResponseString = receivedData["choices"][0]["message"]["content"]

    try:
        structured_data = json.loads(aiResponseString)
    except json.JSONDecodeError:
        structured_data = {"error": "Failed to parse AI output", "raw": aiResponseString}
       
    return {
        "message": "Scan completed", 
        "vulnerabilitiesFound": structured_data
    }       