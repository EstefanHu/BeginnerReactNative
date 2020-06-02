import React, { useContext } from 'react';
import { Context } from '../providers/BlogProvider';
import { useNavigation } from '@react-navigation/native';
import { BlogForm } from '../components/BlogForm';

export const BlogCreate = () => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();

  return <BlogForm
    type={'Create'}
    onSubmit={(title, content) => {
      addBlogPost(title,
        content,
        () => navigation.navigate('Blog')
      )
    }}
  />
}