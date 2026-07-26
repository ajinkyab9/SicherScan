from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CodePayLoad(BaseModel):
    code: str

@app.post("/scan")
async def scan_code(payload: CodePayLoad):
    return {"message": "Success", "code_received": payload.code}