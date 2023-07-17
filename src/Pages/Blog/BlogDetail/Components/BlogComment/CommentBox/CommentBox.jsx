import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Box, Button } from '@mui/material';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

// Xu ly khi chua co backend
const userComment = {
  img: 'https://preview.colorlib.com/theme/hvac/img/blog/details/comment-1.png',
  name: 'adam everest',
}
export default function CommentBox({comment, replyCount, isReply}) {
  const {content, likeCount} = comment;
  const defIsReply = isReply ?? false;
  return (
    <Box className={defIsReply === false ? 'blog-detail__comment__item' : 'blog-detail__comment__item reply-comment'}>
      <Box className='blog-detail__comment__item__pic'>
        <Box component={'img'} alt='avatar user' src={userComment.img} />
      </Box>
      <Box className='blog-detail__comment__item__text'>
        <Box component={'h6'}>{userComment.name}</Box>
        <Markdown options={{forceBlock: true}}>
          {content}
        </Markdown>
        <Button className='blog-comment-btn'>like</Button>
        <Button className='blog-comment-btn'>reply</Button>
        <Box className='blog-comment-counter'>
          <Box component={'span'} className='blog-comment-counter'>
            <FontAwesomeIcon icon={faHeart} color='#db2d2e' />
            &nbsp;{likeCount}
          </Box>
          <Box component={'span'} className='blog-comment-counter'>
            <FontAwesomeIcon icon={faCommentDots} color='#db2d2e' />
            &nbsp;{replyCount}
          </Box>
        </Box>

      </Box>
    </Box>
  )
}
CommentBox.propTypes = {
  comment: PropTypes.object.isRequired,
  replyCount: PropTypes.number,
  isReply: PropTypes.bool,
}