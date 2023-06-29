import { Header } from './Header';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'Routes';
import { Error404 } from 'Errors';

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Routes>
        {publicRoutes}
        {privateRoutes}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}
