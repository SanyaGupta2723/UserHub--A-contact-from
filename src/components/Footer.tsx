import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} UserHub (By Sanya). All rights reserved.</p>
        <p className="text-gray-400 text-sm mt-2">
          Data provided by{' '}
          <a 
            href="https://jsonplaceholder.typicode.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            JSONPlaceholder
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;