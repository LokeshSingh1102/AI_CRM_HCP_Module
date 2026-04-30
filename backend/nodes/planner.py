# nodes/planner.py

from langchain_groq import ChatGroq

llm = ChatGroq(model="llama-3.3-70b-versatile", temperature=0)

def planner_node(state):
    user_input = state["input"]

    prompt = f"""
    Decide which tool to use:

    Input:
    "{user_input}"

    Options:
    - log → new interaction
    - edit → modify existing
    - outcome → generate outcome summary
    - followup → suggest next steps
    - objection → Extracts objections and insights from HCP interaction

    Rules:
    - If user describes interaction → log
    - If user edits/change something → edit
    - If user asks summary/outcome → outcome
    - If user asks next steps → followup
    - If user mentions concern, issue, objection → use "objection"

    Return ONLY one:
    log OR edit OR next steps OR outcome OR followup OR objection
    """

    decision = llm.invoke(prompt).content.strip().lower()

    return {"tool": decision}