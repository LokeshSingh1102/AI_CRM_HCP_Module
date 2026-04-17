from langgraph.graph import StateGraph
from state import InteractionState
# from tools.edit_interaction import edit_interaction_tool
from nodes.planner import planner_node
from nodes.tools import log_node, edit_node, outcome_node, followup_node,objection_node


# def edit_node(state: InteractionState):
#     updated = edit_interaction_tool.invoke({
#         "input_text": state["input"],
#         "current_data": state["current_data"]
#     })

#     return {
#         "updated_fields": updated
#     }

def build_graph():
    graph = StateGraph(InteractionState)

    graph.add_node("planner", planner_node)
    graph.add_node("log", log_node)
    graph.add_node("edit", edit_node)
    graph.add_node("outcome", outcome_node)
    graph.add_node("followup", followup_node)
    graph.add_node("objection", objection_node)

    graph.set_entry_point("planner")

    graph.add_conditional_edges(
        "planner",
        lambda state: state["tool"],
        {
            "log": "log",
            "edit": "edit",
            "outcome": "outcome",
            "followup": "followup",
            "objection": "objection",
        }
    )

    graph.set_finish_point("log")
    graph.set_finish_point("edit")
    graph.set_finish_point("outcome")
    graph.set_finish_point("followup")
    graph.set_finish_point("objection")

    return graph.compile()