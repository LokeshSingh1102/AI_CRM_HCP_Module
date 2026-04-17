import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setInteraction } from "../redux/interactionSlice";
import axios from 'axios'


const Section = ({ title, children }: any) => (
  <div className="mb-6">
    <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const InteractionForm = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.interaction);


  return (
    <div>
      {/* Interaction Details */}
      <Section title="Interaction Details">
        <input
          className="w-full border p-2 rounded"
          placeholder="HCP Name"
          value={data.hcp_name}
          onChange={(e) =>
            dispatch(setInteraction({ hcp_name: e.target.value }))
          }
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Interaction Type"
          value={data.interaction_type}
          onChange={(e) =>
            dispatch(setInteraction({ interaction_type: e.target.value }))
          }
        />
      </Section>

      {/* Topics */}
      <Section title="Topics Discussed">
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Enter topics..."
          value={data.topics}
          onChange={(e) =>
            dispatch(setInteraction({ topics: e.target.value }))
          }
        />
      </Section>

      {/* Sentiment */}
      <Section title="Sentiment">
        <select
          className="w-full border p-2 rounded"
          name="sentiment"
          value={data.sentiment}
          onChange={(e) =>
            dispatch(setInteraction({ [e.target.name]: e.target.value }))
          }
        >
          <option value="positive">😊 Positive</option>
          <option value="neutral">😐 Neutral</option>
          <option value="negative">☹️ Negative</option>
        </select>
      </Section>

      {/* Outcome */}
      <div>
        <h3>Outcome</h3>
        <textarea
          className="w-full border p-2 rounded"
          value={data.outcome || ""}
          onChange={(e) =>
            dispatch(setInteraction({ outcome: e.target.value }))
          }
          placeholder="Outcome..."
        />
      </div>

      {/* Follow-up */}
      <div>
        <h3>Next Steps</h3>
        <textarea
          className="w-full border p-2 rounded"
          value={data.follow_up || ""}
          onChange={(e) =>
            dispatch(setInteraction({ follow_up: e.target.value }))
          }
          placeholder="Next steps..."
        />
      </div>

      <div>
        <h3>Objections</h3>
        <textarea className="w-full border p-2 rounded" value={data.objections || ""} />
      </div>

      <div>
        <h3>Insights</h3>
        <textarea className="w-full border p-2 rounded" value={data.insights || ""} />
      </div>

      {/* <button onClick={handleSave}>
        {data.id ? "Update" : "Save"}
      </button> */}



      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
        Save Interaction
      </button>
    </div>
  );
};

export default InteractionForm;