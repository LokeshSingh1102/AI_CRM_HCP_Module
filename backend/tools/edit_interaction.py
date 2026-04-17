# tools/edit_interaction.py

import json
import re
from langchain.tools import tool
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

@tool
def edit_interaction_tool(input_text: str, current_data: dict):
    """
    Edits an existing CRM interaction.

    Takes user instruction and current interaction data,
    returns only the fields that need to be updated.
    """
    prompt = f"""
    Current Data:
    {current_data}

    User Instruction:
    "{input_text}"

    Return ONLY fields that need to change.

    Fields:
    - hcp_name
    - interaction_type
    - topics
    - sentiment

    Return JSON only.
    """

    response = llm.invoke(prompt)
    content = response.content

    content = re.sub(r"```(?:json)?", "", content)
    content = content.replace("```", "").strip()

    try:
        return json.loads(content)
    except:
        return {}