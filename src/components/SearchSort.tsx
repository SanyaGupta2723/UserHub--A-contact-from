import React from 'react';
import { useUserContext } from '../context/UserContext';
import { Search, SortAsc, SortDesc } from 'lucide-react';

const SearchSort: React.FC = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    sortBy, 
    setSortBy,
    sortDirection,
    setSortDirection
  } = useUserContext();

  const handleSortChange = (field: string) => {
    // If selecting the same field, toggle direction
    if (field === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If selecting a new field, set it and default to ascending
      setSortBy(field as any);
      setSortDirection('asc');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search users by name, email, or username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-2">Sort by:</h3>
        <div className="flex flex-wrap gap-2">
          {[
            { label: 'Name', value: 'name' },
            { label: 'Username', value: 'username' },
            { label: 'Email', value: 'email' },
            { label: 'City', value: 'address' },
            { label: 'Company', value: 'company' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`flex items-center px-3 py-1.5 rounded-md text-sm ${
                sortBy === option.value
                  ? 'bg-blue-100 text-blue-800 border border-blue-200'
                  : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
              } transition-colors duration-200`}
            >
              {option.label}
              {sortBy === option.value && (
                sortDirection === 'asc' ? (
                  <SortAsc className="ml-1 w-4 h-4" />
                ) : (
                  <SortDesc className="ml-1 w-4 h-4" />
                )
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSort;