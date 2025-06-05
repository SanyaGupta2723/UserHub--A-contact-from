import React from 'react';
import { User } from '../types/User';
import { MapPin, Briefcase, Phone, Globe, Mail } from 'lucide-react';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
            {user.name.charAt(0)}
          </div>
          <div className="ml-4 text-white">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-blue-100">@{user.username}</p>
          </div>
        </div>
      </div>
      
      <div className="p-5 space-y-4">
        <div className="flex items-start">
          <Mail className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
          <a href={`mailto:${user.email}`} className="text-blue-600 hover:underline truncate">
            {user.email}
          </a>
        </div>
        
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="text-gray-700">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-700">
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Phone className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
          <a href={`tel:${user.phone}`} className="text-gray-700 hover:text-blue-600">
            {user.phone}
          </a>
        </div>
        
        <div className="flex items-start">
          <Globe className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
          <a 
            href={`https://${user.website}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        </div>
        
        <div className="flex items-start">
          <Briefcase className="w-5 h-5 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <p className="text-gray-700 font-medium">{user.company.name}</p>
            <p className="text-gray-600 text-sm italic">"{user.company.catchPhrase}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;