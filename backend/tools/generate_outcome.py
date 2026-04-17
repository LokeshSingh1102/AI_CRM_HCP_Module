import json
import re
from langchain.tools import tool
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

@tool
def generate_outcome_tool(input_text: str, current_data: dict):
    """
    Generates outcome/summary of an interaction.
    """

    prompt = f"""
    Current Data:
    {current_data}
    Summarize the outcome of this interaction based on the Current Data:

    User Instruction:
    "{input_text}"

    Generate concise outcome.

    Rules:
    - Keep it SHORT (1-2 lines max)
    - NO numbering
    - NO bullet points
    - NO explanations
    - Use simple actionable phrases

    Return JSON:
    {{
    "outcome": "..."
    }}
    """

    res = llm.invoke(prompt)
    content = res.content

    content = re.sub(r"```(?:json)?", "", content)
    content = content.replace("```", "").strip()

    try:
        return json.loads(content)
    except:
        return {"outcome": content}