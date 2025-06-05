import React from 'react';

const UserSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="bg-gray-300 p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
          <div className="ml-4 space-y-2">
            <div className="h-5 bg-gray-400 rounded w-32"></div>
            <div className="h-4 bg-gray-400 rounded w-24"></div>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-start">
            <div className="w-5 h-5 bg-gray-300 rounded mr-2 flex-shrink-0"></div>
            <div className="space-y-2 flex-grow">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              {i % 2 === 0 && <div className="h-4 bg-gray-300 rounded w-4/5"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSkeleton;