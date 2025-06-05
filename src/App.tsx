import React from 'react';
import UserDirectory from './components/UserDirectory';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <UserProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <UserDirectory />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;