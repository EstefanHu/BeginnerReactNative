import React, { useReducer } from 'react';

export const BlogContext = React.createContext({ state: null });

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(blogReducer, []);

  const add_blogpost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    <BlogContext.Provider value={{ data: state, add_blogpost }}>
      {children}
    </BlogContext.Provider>
  )
}