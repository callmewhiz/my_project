/**
 * Utility functions for user authentication and session management
 * 
 */

export const checkSessionValidity = (session) => {
  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  if (!session || !session.expiresAt) {
    return false;
  }

  const currentTime = Date.now();
  const bufferTime = 5 * 60 * 1000; // 5 minute buffer

  if (currentTime > session.expiresAt) {
    console.warn("Session has expired.");
    return false;
  }

  return true;
};

export const logoutUser = () => {
  localStorage.removeItem('user_token');
  window.location.href = '/login';
};