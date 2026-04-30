import InteractionForm from "./components/InteractionForm";
import ChatAssistant from "./components/ChatAssistant";
import './App.css'


function App() {
  return (
    <div className="h-full bg-gray-300 flex flex-col overflow-hidden">
      <div className=" flex items-center">
        <h2 className="text-xl font-bold">Log HCP Interaction</h2>
      </div>
      <div className="flex p-4 gap-4">

        {/* LEFT: FORM */}
        <div className="max-h-screen w-2/3 bg-white rounded-2xl shadow p-6 overflow-y-auto">
          <InteractionForm />
        </div>

        {/* RIGHT: CHAT */}
        <div className="max-h-screen overflow-y-auto w-1/3 bg-white rounded-2xl shadow p-4 flex flex-col">
          <ChatAssistant />
        </div>
      </div>

    </div>
  );
}

export default App;
