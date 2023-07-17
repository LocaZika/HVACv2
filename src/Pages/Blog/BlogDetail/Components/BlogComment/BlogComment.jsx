import PropTypes from 'prop-types';
import './BlogComment.scss';
import { Box } from '@mui/material';
import { Fragment } from 'react';
import CommentBox from './CommentBox/CommentBox';


export default function BlogComment({comment}) {
  if (comment.length == 0){
    return null
  }else{
    return (
      <Box className='blog-detail__comment'>
        <Box component={'h4'}>{comment.length} comments</Box>
        {
          comment.map((item) => (
            <Fragment key={item.id}>
              <CommentBox
                comment={item}
                replyCount={item.replies === undefined ? 0 : item.replies.length}
              />
              {
                item.replies !== undefined ? (
                  item.replies.map((reply) => (
                    <CommentBox key={reply.id} comment={reply} isReply={true} />
                  ))
                ) : null
              }
            </Fragment>
          ))
        }
      </Box>
    )
  }
}
BlogComment.propTypes = {
  comment: PropTypes.array.isRequired
}