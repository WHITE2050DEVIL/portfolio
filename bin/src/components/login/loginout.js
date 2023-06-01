import React from 'react';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/logout', {
        method: 'POST',
      });

      if (response.ok) {
        // Logout successful, perform any desired action (e.g., redirect to login page)
        console.log('Logout successful');
      } else {
        const error = await response.json();
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
