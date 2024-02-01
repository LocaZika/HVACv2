import { Box, Button, TextareaAutosize } from '@mui/material';
import './BlogCommentForm.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { authState } from 'Middlewares/authSlice';
import { Link } from 'react-router-dom';

export default function BlogCommentForm({db}) {
  const [comment, setComment] = useState('');
  const {isLogin} = useSelector(authState);
  const { title, commentText, buttonText } = db;
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Box className='blog-detail__comment-form'>
      <Box component='h4'>{title}</Box>
      {
        isLogin === false ? (
          <Box component='p' className='blog-detail__comment-form__login'>
            you need&nbsp;
            <Link to={'/login'}>Login</Link>
            &nbsp;to comment
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <Box className='blog-detail__comment-form__comment'>
              <Box component='p'>{commentText}</Box>
              <TextareaAutosize
                minRows={10}
                maxRows={10}
              />
            </Box>
            <Button type='submit'>{buttonText}</Button>
          </form>
        )
      }
    </Box>
  )
}
BlogCommentForm.propTypes = {
  db: PropTypes.object.isRequired,
}