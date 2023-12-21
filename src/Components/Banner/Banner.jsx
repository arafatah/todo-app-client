import React from 'react';
import { Link } from 'react-router-dom';
import Animation from '../../../public/Animation - 1703096154647.json';
import Lottie from 'lottie-react';

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-preline-primary text-preline-text">
      <div className="w-1/2 p-8 text-center">
        <p className="text-2xl md:text-3xl lg:text-4xl mb-2">Goal Achievements</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Planning Schedule</h2>
        <Link to="/login">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg md:text-xl lg:text-2xl font-semibold hover:bg-opacity-80 focus:outline-none focus:ring focus:border-preline-border">
            Let's Explore
          </button>
        </Link>
      </div>
      <div className="w-1/2">
        <Lottie
          animationData={Animation}
          loop={true}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
