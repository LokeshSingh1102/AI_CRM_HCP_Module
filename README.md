# AI_CRM_HCP_Module
🎯 Key Features
* 📝 Dual Input System

  * Structured form for manual entry
  * AI chat assistant for natural language input

* 🤖 Multi-Tool AI Agent (LangGraph)

  * Log Interaction
  * Edit Interaction (state-aware updates)
  * Outcome Generation
  * Follow-up Suggestions
  * Objection & Insight Analysis

* ⚡ Partial Updates (AI-first UX)

  * AI updates only modified fields instead of overwriting the entire form

* 🧠 Intelligent Insights

  * Extracts sentiment, objections, and doctor insights
  * Generates next best actions

* 🔄 Real-time Sync

  * AI responses directly update frontend form via Redux

* 🎨 Clean CRM UI

  * Built with React + Tailwind for a modern SaaS look


🏗️ Architecture

### Frontend

* React (TypeScript)
* Redux Toolkit (state management)
* Tailwind CSS (UI)

### Backend

* FastAPI (Python)
* REST APIs for AI interaction

### AI Layer

* LangGraph (multi-tool agent orchestration)
* LangChain tools

### LLM

* Groq API (llama-3.3-70b-versatile)

### Database (Optional/Extendable)

* PostgreSQL / MySQL


🔄 System Flow

1. User enters input (form or chat)
2. Request sent to FastAPI backend
3. LangGraph agent processes input

   * Planner decides which tool to use
4. Selected tool executes using LLM
5. Structured JSON response returned
6. Frontend merges response into Redux state
7. UI updates in real-time

🧩 LangGraph Agent Design

The system uses a multi-tool agent with the following components:

### 🧠 Planner Node

Decides which tool to invoke:

* log
* edit
* outcome
* followup
* objection

### 🔧 Tools

1. **Log Interaction Tool**

   * Extracts structured data from natural language

2. **Edit Interaction Tool**

   * State-aware updates (modifies only specific fields)

3. **Outcome Generator**

   * Summarizes interaction outcome

4. **Follow-up Generator**

   * Suggests next actionable steps

5. **Objection Analyzer**

   * Identifies concerns and insights from HCP

📸 UI Preview

* Left Panel: Interaction Form
* Right Panel: AI Chat Assistant

Users can:

* Fill form manually
* Or describe interaction in chat → auto-fill form
