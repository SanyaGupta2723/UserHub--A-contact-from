import React from 'react';
import { useUserContext } from '../context/UserContext';
import UserCard from './UserCard';
import UserSkeleton from './UserSkeleton';
import ErrorDisplay from './ErrorDisplay';
import SearchSort from './SearchSort';

const UserDirectory: React.FC = () => {
  const { 
    users, 
    loading, 
    error, 
    fetchUsers, 
    searchTerm,
    sortBy,
    sortDirection
  } = useUserContext();

  const filteredUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (!sortBy) return 0;
      
      let valueA: any = a[sortBy];
      let valueB: any = b[sortBy];
      
      // Handle nested properties for address.city or company.name
      if (sortBy === 'address') {
        valueA = a.address.city;
        valueB = b.address.city;
      } else if (sortBy === 'company') {
        valueA = a.company.name;
        valueB = b.company.name;
      }
      
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }
      
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-800">User Directory</h1>
        <button 
          onClick={fetchUsers}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
          </svg>
          Refresh Data
        </button>
      </div>

      <SearchSort />
      
      {error && <ErrorDisplay message={error} onRetry={fetchUsers} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(6).fill(0).map((_, index) => <UserSkeleton key={index} />)
        ) : (
          filteredUsers.length > 0 ? (
            filteredUsers.map(user => <UserCard key={user.id} user={user} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">No users found matching your search.</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserDirectory;