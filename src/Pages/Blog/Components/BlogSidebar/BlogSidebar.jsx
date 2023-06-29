import { Box, Skeleton } from "@mui/material";
import { SearchForm } from "Components";
import PropTypes from "prop-types";
import "./BlogSidebar.scss";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

export default function BlogSidebar({onSearch, pageDB, featureNews}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box className="blog__sidebar">
      <Box className="blog__sidebar__search">
        <SearchForm onSubmit={onSearch} />
      </Box>
      <Box className="blog__sidebar__feature">
        {
          isEmpty(pageDB) === true ? <Skeleton animation='wave' variant="text" height={19.16} /> :
          <Box component='h4'>{pageDB.feature.title}</Box>
        }
        {
          isEmpty(featureNews) === true ? (
            <Box>
              <Skeleton animation='wave' variant="text" height={19.16} sx={{marginBottom: '28px'}} />
              <Skeleton animation='wave' variant="text" height={24} />
            </Box>
          ) : (
            featureNews.map(({id, title, postedBy, postDate}) => (
              <Box key={id} className="blog__sidebar__feature__item">
                <Box component='h6'>
                    <Link to={`/blog-detail/${id}`}>{title}</Link>
                </Box>
                <Box component='ul'>
                  <Box component='li'>
                    By&nbsp;{postedBy}
                  </Box>
                  <Box component='li'>
                    {postDate}
                  </Box>
                </Box>
              </Box>
            ))
          )
        }
      </Box>
      <Box className="blog__sidebar__categories">
        {
          isEmpty(pageDB) === true ? (
            <Skeleton animation='wave' variant="text" height={183} sx={{marginBottom: '30px'}} />
          ) : (
            <>
              <Box component='h4'>{pageDB.categories.title}</Box>
              <Box component='ul'>
                {
                  pageDB.categories.items.map(({title, path}, index) => (
                    <Box key={index} component='li'>
                      <Link to={path}>{title}</Link>
                    </Box>
                  ))
                }
              </Box>
            </>
          )
        }
      </Box>
      <Box className="blog__sidebar__tag">
        {
          isEmpty(pageDB) === true ? (
            <Skeleton animation='wave' variant="text" height={96.8} sx={{marginBottom: '70px'}} />
          ) : (
            <>
              <Box component='h4'>{pageDB.tags.title}</Box>
              {
                pageDB.tags.items.map(({name, path}, index) => (
                  <Link key={index} to={path}>{name}</Link>
                ))
              }
            </>
          )
        }
      </Box>
      <Box className="blog__sidebar__newsletter">
        {
          isEmpty(pageDB) === true ? (
            <Skeleton animation='wave' variant="text" height={155} />
          ) : (
            <>
              <Box component='h4'>{pageDB.title}</Box>
              <Box component='p'>{pageDB.description}</Box>
              <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder={pageDB.newsletter.subscribeForm.placeHolder} />
                <button type="submit">{pageDB.newsletter.subscribeForm.buttonText}</button>
              </form>
            </>
          )
        }
      </Box>
    </Box>
  )
}
BlogSidebar.propTypes = {
  pageDB: PropTypes.object,
  onSearch: PropTypes.func.isRequired,
  featureNews: PropTypes.array,
}