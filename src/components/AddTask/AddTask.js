import React from "react";
import { useForm } from "react-hook-form";

const AddTask = () => {
  const { register, handleSubmit } = useForm();


  const onSubmit = data => {
  console.log(data);
  const url = `http://localhost:5000/user`;
 fetch(url,{
  method: 'POST',
  headers:{
      'content-type': 'application/json'
  },
  body: JSON.stringify(data)
 })
 .then(res => res.json())
 .then(result =>{
     console.log(result)
 })


};


  return (
    <div>
      <h3 className="mt-2">Please Add Your New Task</h3>
      <div className="w-50 mx-auto mt-3">
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="mb-2"
            placeholder="Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <textarea
            className="mb-2"
            placeholder="description"
            {...register("description")}
          />
          <input type="submit" value="addTask" />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
