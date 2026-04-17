from typing import TypedDict, Optional, Dict

class InteractionState(TypedDict):
    input: str                 # user message
    current_data: Dict         # existing form state
    tool: Optional[str]
    output: Optional[Dict]