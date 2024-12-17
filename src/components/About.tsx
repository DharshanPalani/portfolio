import React from "react";

interface AboutsProps extends React.HTMLAttributes<HTMLDivElement> {}

const Abouts: React.FC<AboutsProps> = ({ className, ...props }) => {
  return (
    <div
      className={`col-span-5 row-span-2 bg-pink-100/70 rounded-2xl p-4 hover:shadow-lg transition-all animate-pop-up ${
        className || ""
      }`}
      {...props}
    >
      <div className="mb-2">
        <h3 className="flex items-center font-semibold text-gray-800">
          <span className="bg-blue-700 w-2 h-2 mr-2 rounded-full"></span> About Me
        </h3>
      </div>
      <p className="text-sm text-gray-700">
        I’m into coding with JavaScript, React, and Node.js. I focus on building
        what’s needed, keeping it simple, and getting things done right. No need
        for extra, just the core of what works
      </p>
    </div>
  );
};

export default Abouts;
