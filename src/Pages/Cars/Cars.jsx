import { Box, Container, Grid } from '@mui/material';
import { Breadcrumb, SearchForm, Pagination } from 'Components';
import './Cars.scss';
import FormCarFilter from './Components/FormCarFilter';
import CarSort from './Components/CarSort';
import { ProductCard } from 'Components';
import { useFetch } from 'Services/Hooks';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { carsPageState, carsPageSlice } from './carsPageSlice';
import { useSearchParams } from 'react-router-dom';

export default function Cars() {
  // const [extraOpt, setExtraOpt] = useState({
  //   sort: 'price',
  //   page: 1,
  //   order: 'desc',
  //   limit: 9,
  //   search: '',
  // });
  // const [totalCount, setTotalCount] = useState(0);
  // const [carList, setCarList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const {extraOpt, totalCount, result, carList} = useSelector(carsPageState);
  const {
    changeLimit,
    changeOrder,
    changeResult,
    changePage,
    changeTotalCount,
    addCarList,
    changeSearch,
  } = carsPageSlice.actions;
  const dispatch = useDispatch();
  const api = useFetch('cars');
  const handleSortOptions = (limit, order) => {
    dispatch(changeLimit(limit));
    dispatch(changeOrder(order));
  }
  const handleClickPagination = (page) => {
    dispatch(changePage(page));
  };
  const handleSubmitSearch = (keyword) => {
    const extraOptions = {...extraOpt, page: 1, search: keyword};
    dispatch(changePage(1));
    dispatch(changeSearch(keyword));
    api.get(extraOptions).then(({data}) => {
      dispatch(changeResult(data));
    });
  };
  useEffect(() => {
    api.get(extraOpt).then(({res, data}) => {
      const totalCount = Math.ceil(res.headers.get('X-Total-Count') / extraOpt.limit)
      let params = {};
      if (extraOpt.order !== 'desc'){
        params._order = extraOpt.order;
      }
      if (extraOpt.page !== 1){
        params._page = extraOpt.page;
      }
      if (extraOpt.limit !== 9){
        params._limit = extraOpt.limit;
      }
      if (extraOpt.search !== ''){
        params['q'] = extraOpt.search;
        extraOpt.page = 1;
      }
      dispatch(changeTotalCount(totalCount));
      dispatch(addCarList(data));
      setSearchParams(params);
    });
  }, [totalCount, extraOpt]);
  if (carList.length === 0){
    return <div></div>
  }
  return (
    <>
      <Breadcrumb currentPath={'car listing'} />
      <Box component={'section'} className='cars spad'>
        <Container fixed>
          <Grid container>
            <Grid item xs={12} lg={3} paddingX={'15px'} >
              <Box className='cars__sidebar' >
                <Box className='cars__sidebar__search'>
                  <Box component={'h5'}>car search</Box>
                  <SearchForm onSubmit={handleSubmitSearch} />
                </Box>
                <Box className='cars__sidebar__filter'>
                  <Box component={'h5'}>car filter</Box>
                  <FormCarFilter />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={9} paddingX={'15px'}>
              <Grid container className='cars-sort'>
                <CarSort setSort={handleSortOptions} />
              </Grid>
              <Grid container className='cars-list'>
                {
                  result.length === 0 ? (
                    carList.map(car => <ProductCard key={car.id} product={car} lg={4} />)
                  ): (
                    result.map(car => <ProductCard key={car.id} product={car} lg={4} />)
                  )

                }
              </Grid>
              <Grid container className='cars-pagination'>
                <Pagination totalCount={totalCount} setPage={handleClickPagination}  />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}