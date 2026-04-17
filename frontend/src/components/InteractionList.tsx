import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../redux/hooks";
import { setInteraction } from "../redux/interactionSlice";

const InteractionList = () => {
  const [list, setList] = useState<any[]>([]);
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const res = await axios.get("http://localhost:8000/interactions");
    setList(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h3>Saved Interactions</h3>

      {list.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 5 }}>
          <p>{item.hcp_name}</p>
          <p>{item.topics}</p>

          <button onClick={() => dispatch(setInteraction(item))}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default InteractionList;