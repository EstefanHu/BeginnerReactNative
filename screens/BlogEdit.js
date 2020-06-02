import React, { useContext } from 'react';
import { Context } from '../providers/BlogProvider.js';
import { BlogForm } from '../components/BlogForm.js';

export const BlogEdit = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params?.id;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return <BlogForm
    type={'Edit'}
    initialValues={{
      title: blogPost.title,
      content: blogPost.content
    }}
    onSubmit={(title, content) => editBlogPost(
      id,
      title,
      content,
      () => navigation.navigate('BlogPost', { id })
    )}
  />
}

