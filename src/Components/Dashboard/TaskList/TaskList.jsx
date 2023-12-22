import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/Authprovider";
import { FaTrash, FaArrowRight } from "react-icons/fa";
import Navbar from "../../Navbar/Navbar";
import Aos from "aos";
import 'aos/dist/aos.css'

const TaskList = () => {
  const [todoList, setTodoList] = useState([]);
  const { user } = useContext(AuthContext);

 
  const handleDeleteTask = async (taskId) => {
    try {
      // Send a request to delete the task
      await axios.delete(`https://todo-application-server-nine.vercel.app/todos/${taskId}`);
      const updatedTodos = todoList.filter((task) => task._id !== taskId);
      setTodoList(updatedTodos);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleMoveToNextStatus = async (taskId, currentStatus) => {
    try {
      let newStatus;
      if (currentStatus === "todo") {
        newStatus = "ongoing";
      } else if (currentStatus === "ongoing") {
        newStatus = "completed";
      } else {
        // You might want to handle other cases or leave it as is
        return;
      }

      // Send a request to update the task status
      await axios.patch(`https://todo-application-server-nine.vercel.app/todos/${taskId}`, {
        status: newStatus,
      });

      // Update the local state to reflect the change
      const updatedTodos = todoList.map((task) => {
        if (task._id === taskId) {
          return { ...task, status: newStatus };
        }
        return task;
      });
      setTodoList(updatedTodos);
    } catch (error) {
      console.error("Error moving task to the next status:", error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `https://todo-application-server-nine.vercel.app/todos/${user?.email}`
        );
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
    Aos.init({duration:2000})

  }, [user?.email]);

  // Categorize tasks based on status
  const todoTasks = todoList.filter((task) => task.status === "todo");
  const ongoingTasks = todoList.filter((task) => task.status === "ongoing");
  const completedTasks = todoList.filter((task) => task.status === "completed");

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex flex-col md:flex-row md:space-x-8 my-3">
      
      <div className="md:flex-1 " data-aos = "fade-left"
>
        <h2 className="text-xl font-bold mb-4">To-Do List</h2>
        <ul className="space-y-4">
          {todoTasks.map((todo) => (
            <li key={todo._id} className="bg-white p-4 rounded-md shadow-md relative">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-sm text-gray-600">Deadline: {todo.deadline}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteTask(todo._id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleMoveToNextStatus(todo._id, todo.status)}
                >
                  <FaArrowRight />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex-1" data-aos = "fade-right"
>
        <h2 className="text-xl font-bold mb-4">Ongoing List</h2>
        <ul className="space-y-4">
          {ongoingTasks.map((ongoing) => (
            <li key={ongoing._id} className="bg-white p-4 rounded-md shadow-md relative">
              <h3 className="text-lg font-semibold">{ongoing.title}</h3>
              <p className="text-sm text-gray-600">Deadline: {ongoing.deadline}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteTask(ongoing._id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleMoveToNextStatus(ongoing._id, ongoing.status)}
                >
                  <FaArrowRight />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex-1" data-aos = "fade-up"
>
        <h2 className="text-xl font-bold mb-4">Completed List</h2>
        <ul className="space-y-4">
          {completedTasks.map((completed) => (
            <li key={completed._id} className="bg-white p-4 rounded-md shadow-md relative">
              <h3 className="text-lg font-semibold">{completed.title}</h3>
              <p className="text-sm text-gray-600">Deadline: {completed.deadline}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleDeleteTask(completed._id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="text-blue-500 cursor-pointer"
                  onClick={() => handleMoveToNextStatus(completed._id, completed.status)}
                >
                  <FaArrowRight />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default TaskList;
