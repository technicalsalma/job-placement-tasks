import React from 'react';
import useUser from '../../hook/useUser';
import ManageAll from '../ManageAll/ManageAll';

const ManageTask = () => { 
    const [users, setUsers] = useUser();

    

    return (
        <div>
            <h2>AddUsers: {users.length}</h2>
            <div className='row gy-5'>
                {
                    users.map(user => <ManageAll
                    key={user._id}
                    user={user}
                    ></ManageAll>)
                }
                
            </div>
        </div>
    );
};

export default ManageTask;
