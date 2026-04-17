# tools/log_interaction.py

import json
import re
from langchain.tools import tool
from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

@tool
def log_interaction_tool(input_text: str):
    """
    Extracts structured CRM interaction data from user input.

    Returns fields like hcp_name, interaction type, topics, and sentiment.
    """
    prompt = f"""
    Extract structured CRM data from this:

    "{input_text}"

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