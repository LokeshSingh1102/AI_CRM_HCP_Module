import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setInteraction, resetInteraction } from "../redux/interactionSlice";

const InteractionForm = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.interaction);

  const handleSave = async () => {
    if (data.id) {
      // ✅ EDIT
      const res = await axios.put(
        `http://localhost:8000/interactions/${data.id}`,
        data
      );
      dispatch(setInteraction(res.data));
      alert("Updated successfully");
    } else {
      // ✅ CREATE
      const res = await axios.post(
        "http://localhost:8000/interactions",
        data
      );
      dispatch(setInteraction(res.data));
      alert("Created successfully");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {data.id ? "Edit Interaction" : "Log Interaction"}
      </h2>

      <input
        value={data.hcp_name}
        onChange={(e) =>
          dispatch(setInteraction({ hcp_name: e.target.value }))
        }
        placeholder="HCP Name"
      />

      <textarea
        value={data.topics}
        onChange={(e) =>
          dispatch(setInteraction({ topics: e.target.value }))
        }
        placeholder="Topics"
      />

      <select
        value={data.sentiment}
        name="sentiment"
        onChange={(e) =>
          dispatch(setInteraction({ [e.target.name]: e.target.value }))
        }
      >
        <option value="positive">Positive</option>
        <option value="neutral">Neutral</option>
        <option value="negative">Negative</option>
      </select>

      <button onClick={handleSave}>
        {data.id ? "Update" : "Save"}
      </button>

      <button onClick={() => dispatch(resetInteraction())}>
        Reset
      </button>
    </div>
  );
};

export default InteractionForm;