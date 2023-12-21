import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Provider/Authprovider";

const TaskList = () => {
  const [todoList, setTodoList] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/todos/${user?.email}`
        );
        // console.log(response.data);
        setTodoList(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [user?.email]);

  return (
    <div className="container mx-auto flex flex-col md:flex-row md:space-x-8">
      <div className="md:flex-1">
        <h2 className="text-xl font-bold mb-4">To-Do List</h2>
        <ul className="space-y-4">
          {todoList.map((todo) => (
            <li key={todo._id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{todo.title}</h3>
              <p className="text-sm text-gray-600">Deadline: {todo.deadline}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:flex-1">
        <h2 className="text-xl font-bold mb-4">Ongoing List</h2>
        {/* Add your Ongoing List content here */}
      </div>

      <div className="md:flex-1">
        <h2 className="text-xl font-bold mb-4">Completed List</h2>
        {/* Add your Completed List content here */}
      </div>
    </div>
  );
};

export default TaskList;
