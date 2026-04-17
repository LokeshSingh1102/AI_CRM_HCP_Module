import json
import re
from langchain.tools import tool
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

@tool
def objection_analyzer_tool(input_text: str):
    """
    Extracts objections and insights from HCP interaction.
    """

    prompt = f"""
    Analyze the interaction:

    "{input_text}"

    Extract:
    - objections (if any)
    - insights about doctor's mindset

    Rules:
    - Keep it concise
    - No explanation
    - CRM-friendly

    Return JSON:
    {{
    "objections": "...",
    "insights": "..."
    }}
    """

    res = llm.invoke(prompt)
    content = res.content

    content = re.sub(r"```(?:json)?", "", content)
    content = content.replace("```", "").strip()

    try:
        return json.loads(content)
    except:
        return {
            "objections": "",
            "insights": content
        }