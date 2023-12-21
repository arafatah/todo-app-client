import React from 'react';

const UserTypeSection = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Who Can Benefit?</h2>
      <p className="text-gray-700">
        Our website is designed to benefit a variety of individuals, including:
      </p>
      <ul className="list-disc pl-6 mt-2 text-gray-700">
        <li>Developers</li>
        <li>Corporate Professionals</li>
        <li>Bankers</li>
        {/* Add more user types as needed */}
      </ul>
    </div>
  );
};

export default UserTypeSection;
