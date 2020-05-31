import React, { useState } from 'react';

export const BlogContext = React.createContext({});

export const BlogProvider = ({ children }) => {
  const [things, setThings] = useState(null);

  return (
    <BlogContext.Provider
      value={
        5
      }
    >
      {children}
    </BlogContext.Provider>
  )
}