import Animation from "../../../public/Animation - 1703096154647.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-preline-primary text-preline-text">
      <div className="w-1/2 p-8 text-center">
        <p className="text-lg mb-2">Goal Achievements</p>
        <h2 className="text-4xl font-bold mb-4">Planning Schedule</h2>
        <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 focus:outline-none focus:ring focus:border-preline-border">
          Let's Explore
        </button>
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
