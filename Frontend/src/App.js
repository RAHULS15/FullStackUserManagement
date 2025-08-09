import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WelcomeModal from './components/WelcomeModal';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [username, setUsername] = useState('');

  // This function will be called by your Login component after successful backend auth
  const handleLogin = (usernameFromLogin) => {
    setIsLoggedIn(true);
    setUsername(usernameFromLogin);
    setShowWelcome(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          {showWelcome ? (
            <WelcomeModal
              username={username}
              onClose={() => setShowWelcome(false)}
              videoSrc='welcome.mp4'
            />
          ) : (
            <Dashboard />
          )}
        </>
      )}
    </div>
  );
}