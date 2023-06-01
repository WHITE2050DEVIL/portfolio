import React, { useState, useEffect } from 'react';

import LogoutButton from '../components/login/loginout';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkLoggedInStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/login');
        if (response.ok) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoggedInStatus();
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          {loggedIn ? (
            <li>
              <LogoutButton />
            </li>
          ) : (
            <>
              <li>
                <a href="/signup">Signup</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
