import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/Authprovider";
import { useContext } from "react";

const NewTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const userEmail = user && user?.email
      const taskData = { ...data, userEmail, status: "todo" };
      await axios.post("http://localhost:5000/todos", taskData);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Task created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });

      reset();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Create a New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            id="title"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-600"
          >
            Deadline
          </label>
          <input
            {...register("deadline")}
            type="text"
            id="deadline"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-600"
          >
            Priority
          </label>
          <select
            {...register("priority")}
            id="priority"
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
