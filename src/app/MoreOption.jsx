import React from 'react';
import userImage from '../Image/girlimg.jpg'; 
const MoreOption = () => {
  return (
    <div className="flex items-center justify-center  px-8 py-16">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8">
       
        <div className='flex-1 flex flex-col items-start justify-center'>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Customer Testimonials</h2>
          <p className="text-sm font-medium text-gray-700 mb-6">
            This tool has transformed my productivity and organization!
          </p>
           <div className="flex-1 border-t-4 p-18 border-l-4  border-b-4 border-red-500 p-6 relative bg-white shadow-lg">
        
          <p className="text-xl font-semibold  text-gray-900 mb-6">
            "Using this website has made my tasks so much easier! I can't imagine my day without it."
          </p>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-red-500"></div>
            <div>
              <p className="font-semibold text-gray-800">Sherri Cronin</p>
              <p className="text-sm text-gray-600">Project Manager, TechCorp</p>
            </div>
          </div>
     
        </div>
        </div>
       

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="border-t-4 p-18 border-r-4 border-b-4 border-red-500  p-1 bg-white shadow-lg">
            <img
              src={userImage}
              alt="Customer"
              className="w-64 h-64 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOption;
