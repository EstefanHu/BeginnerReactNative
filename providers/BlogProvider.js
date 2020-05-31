import React, { useState } from 'react';

export const BlogContext = React.createContext({});

export const BlogProvider = ({ children }) => {
  const [things, setThings] = useState(null);
  
  return (
    <BlogContext>
      {children}
    </BlogContext>
  )
}