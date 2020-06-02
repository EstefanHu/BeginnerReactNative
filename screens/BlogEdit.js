import React, { useContext } from 'react';
import { Context } from '../providers/BlogProvider.js';
import { BlogForm } from '../components/BlogForm.js';

export const BlogEdit = ({ navigation, route }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

  return <BlogForm
    type={'Edit'}
    onSubmit={() => null}
  />
}

