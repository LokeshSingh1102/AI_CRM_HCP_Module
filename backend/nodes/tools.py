# nodes/tools.py

from tools.log_interaction import log_interaction_tool
from tools.edit_interaction import edit_interaction_tool
from tools.generate_outcome import generate_outcome_tool
from tools.generate_followup import generate_followup_tool
from tools.objection_analyzer import objection_analyzer_tool


def log_node(state):
    result = log_interaction_tool.invoke({
        "input_text": state["input"]
    })
    return {"output": result}

def edit_node(state):
    result = edit_interaction_tool.invoke({
        "input_text": state["input"],
        "current_data": state["current_data"]
    })
    return {"output": result}

def outcome_node(state):
    result = generate_outcome_tool.invoke({
        "input_text": state["input"],
        "current_data": state["current_data"]
    })
    return {"output": result}

def followup_node(state):
    result = generate_followup_tool.invoke({
        "input_text": state["input"]
    })
    return {"output": result}

def objection_node(state):
    result = objection_analyzer_tool.invoke({
        "input_text": state["input"]
    })
    return {"output": result}