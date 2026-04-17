import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { setInteraction } from "../redux/interactionSlice";
import { store } from "../redux/store";

const ChatAssistant = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const handleSend = async () => {
    if (!text) return;
    const state = store.getState().interaction;
    setMessages((prev) => [...prev, `🧑 ${text}`]);

    const res = await axios.post("http://localhost:8000/ai/agent", {
      text,
      current_data: state
    });


    dispatch(setInteraction(res.data));

    setMessages((prev) => [
      ...prev,
      `🤖 Parsed & filled form`
    ]);

    setText("");
  };

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">AI Assistant</h2>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-2 mb-3">
        {messages.map((msg, i) => (
          <div key={i} className="bg-gray-100 p-2 rounded">
            {msg}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          className="flex-1 border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Describe interaction..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;