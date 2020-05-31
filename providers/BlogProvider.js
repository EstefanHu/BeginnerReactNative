import React, { useState } from 'react';

export const BlogContext = React.createContext({
  blogPosts: null,
  addBlogPost: () => null
});

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
  }

  return (
    <BlogContext.Provider
      value={{
        blogPosts,
        addBlogPost
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}