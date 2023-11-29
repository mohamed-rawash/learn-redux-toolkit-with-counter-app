import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, increaseFive, decrease } from "./store/counterSlice";
function App() {
  const state = useSelector((state) => state.mohsen.value);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(increase());
  };
  const increaseFiveHandler = () => {
    dispatch(increaseFive({ factor: 5 }));
  };
  const decreaseHandler = () => {
    dispatch(decrease());
  };
  return (
    <div className="App">
      <h1>Redux Basic</h1>
      <h3>Counter Now Is: {state}</h3>
      <button onClick={increaseHandler} className="mx-2 btn btn-outline-info">
        Increase
      </button>
      <button
        onClick={increaseFiveHandler}
        className="mx-2 btn btn-outline-info"
      >
        Increase 5
      </button>
      <button onClick={decreaseHandler} className="btn btn-outline-info">
        decrease
      </button>
    </div>
  );
}

export default App;
