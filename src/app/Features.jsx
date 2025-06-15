import React from 'react';
import { FiUsers, FiSend, FiCheckSquare, FiGrid } from 'react-icons/fi';

const features = [
  {
    id: 1,
    icon: <FiGrid size={36} className="text-red-500" />,
    title: "User-Friendly Interface",
    description: "Our platform offers seamless task management to boost your efficiency.",
  },
  {
    id: 2,
    icon: <FiSend size={36} className="text-red-500" />,
    title: "Collaborate & Share Effortlessly",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: 3,
    icon: <FiUsers size={36} className="text-red-500" />,
    title: "Effortless Collaboration",
    description: "Invite team members to work together and achieve your goals faster.",
  },
  {
    id: 4,
    icon: <FiCheckSquare size={36} className="text-red-500" />,
    title: "Seamless Access",
    description: "Stay connected and manage your tasks on the go with ease.",
  },
];

const Features = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Transform Your Productivity with Our <br className="hidden sm:block" /> Innovative To-Do List Features
        </h1>

        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#F7F7FB] rounded-xl shadow-sm p-10 hover:shadow-md transition h-full duration-300">
              <div className="flex justify-center mb-4">{feature.icon} <div className='text-gray-300 font-black text-4xl  ml-28'>0{feature.id}</div> </div>
              <h3 className="text-md font-black text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <div className="flex justify-center mb-2">
                <div className="w-10 h-1 bg-red-500 rounded-full"></div>
              </div>
              <p className="text-sm text-gray-600 font-medium text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
