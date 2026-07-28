import httpx
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CodePayLoad(BaseModel):
    code: str

@app.post("/scan")
async def scan_code(payload: CodePayLoad):
    llmPrompt = f"Analyse the following code for security vulnerabilities. List any issues found and provide a brief explanation. \n\n{payload.code}"

    async with httpx.AsyncClient() as client:
       llmResponse = await client.post(
        "http://localhost:11434/api/generate",
            json = {
                "model": "qwen2.5-coder:7b",
                "prompt": llmPrompt,
                "stream": False
            },
            timeout = 120.0
        )
       receivedData = llmResponse.json()
       print(receivedData)
    return {
        "message": "Scan completed", 
        "vulnerabilitiesFound": receivedData["response"]}       