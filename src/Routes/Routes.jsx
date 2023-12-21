import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home/Home";
import Register from "../Components/Register/Register";
import Login from "../Components/Login/Login";
import Dashboard from "../Components/Dashboard/Dashboard";
import TaskList from "../Components/Dashboard/TaskList/TaskList";
import NewTask from "../Components/Dashboard/NewTask/NewTask";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "tasklist",
        element: <TaskList></TaskList>
      },
      {
        path: "addtask",
        element: <NewTask></NewTask>
      }
    ],
  },
]);

export default Routes;
