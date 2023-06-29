import { Route } from "react-router-dom";
import { Home, About, Contact, Cars, CarDetail, Blog, BlogDetail } from "Pages";

export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/car-listing">
      <Route path="" element={<Cars />} />
      <Route path="car-detail/:pid/:pname" element={<CarDetail />} />
    </Route>
    <Route path="/blog">
      <Route path="" element={<Blog />} />
      <Route path="blog-detail/:bid/:bname" element={<BlogDetail />} />
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </>
);
