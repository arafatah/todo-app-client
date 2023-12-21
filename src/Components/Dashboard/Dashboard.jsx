import React from 'react';
import { Link } from 'react-router-dom';
import UserTypeSection from './UserTypeSection/UserTypeSection';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Task Management Dashboard</h1>

      <div className="flex space-x-4">
        <Link to="/addtask">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => console.log('Create a new task clicked')}
        >
          Create a New Task
        </button>
        </Link>

        <Link to="/tasklist">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          onClick={() => console.log('See previous tasks clicked')}
        >
          See Previous Tasks
        </button>
        </Link>

      </div>
      <UserTypeSection></UserTypeSection>
    </div>
  );
};

export default Dashboard;
