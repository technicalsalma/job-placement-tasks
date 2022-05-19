import React from 'react';

const ManageAll = ({ user }) => {
    const { name, description } = user;

    const handleDelete = id => {
        const proceed = window.confirm('are you Sure?');
        if(proceed){
            fetch(`https://job-placement-task.herokuapp.com/user/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  alert("task deleted successfully");
                }
              });
        }
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <button onClick={ () => handleDelete(user._id)} className='btn btn-rounded bg-primary text-light px-4'>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default ManageAll;