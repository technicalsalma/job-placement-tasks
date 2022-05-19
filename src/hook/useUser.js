import { useEffect, useState } from "react";

const useUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://job-placement-task.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);
  return [users, setUsers];
};
export default useUser;
