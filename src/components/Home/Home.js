import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
        fetch("http://localhost:5000/user")
          .then((res) => res.json())
          .then((data) => setUsers(data));
    },[])

    const navigateUser= () =>{
        navigate('/addtask')
    }

    return (
        <div>
            <h2 className='mt-3'>AddTask: {users.length}</h2>
            <div className='row gy-5'>
                {
                    users.map(user => <User
                    key={user._id}
                    user={user}
                    ></User>)
                }
            </div>
            <button onClick={() => navigateUser()} className='btn btn-rounded bg-primary text-light mt-5'>Add Task</button>
        </div>
    );
};

export default Home;