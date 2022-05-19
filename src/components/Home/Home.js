import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateUser = () => {
    navigate("/addtask");
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <h2>Welcome!</h2>
      <h2>To</h2>
      <br />
      <h1>To Do Job Placement Task</h1>
      <br />
      <br />

      <button
        onClick={() => navigateUser()}
        className="btn btn-rounded bg-primary text-light mt-5"
      >
        Add Task
      </button>
    </div>
  );
};

export default Home;
