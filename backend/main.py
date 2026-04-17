from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
load_dotenv()
import os
from graph import build_graph

app = FastAPI()

graph = build_graph()

INTERACTIONS_DB = []

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
print("API KEY:", GROQ_API_KEY)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development (loosened)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class AgentRequest(BaseModel):
    text: str
    current_data: dict = {}

@app.post("/ai/agent")
def run_agent(req: AgentRequest):
    result = graph.invoke({
        "input": req.text,
        "current_data": req.current_data
    })

    # print(result)

    return result["output"]