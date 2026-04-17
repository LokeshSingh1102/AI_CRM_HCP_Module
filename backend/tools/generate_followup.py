import json
import re
from langchain.tools import tool
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

@tool
def generate_followup_tool(input_text: str):
    """
    Suggests next steps or follow-up actions.
    """

    prompt = f"""
    Based on this interaction:

    "{input_text}"

    Generate concise next steps.

    Rules:
    - Keep it SHORT (1-2 lines max)
    - NO numbering
    - NO bullet points
    - NO explanations
    - Use simple actionable phrases

    Return JSON:
    {{
    "follow_up": "..."
    }}
    """

    res = llm.invoke(prompt)
    content = res.content

    content = re.sub(r"```(?:json)?", "", content)
    content = content.replace("```", "").strip()
    # print(content["follow_up"])
    # c = json.loads(content)
    try:
        return json.loads(content)
    except:
        return {"follow_up": content}