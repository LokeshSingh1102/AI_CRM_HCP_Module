export interface InteractionState {
  id?: string;
  hcp_name: string;
  interaction_type: string;
  topics: string;
  sentiment: "positive" | "neutral" | "negative";
  outcome?: string;
  follow_up?: string;
  objections?: string;
  insights?: string;
}