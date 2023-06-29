import { Route } from "react-router-dom";
import AuthMiddleware from "Middlewares/AuthMiddleware";
import { Orders } from "Pages";

export const privateRoutes = (
  <>
    <Route path="/orders" element={<AuthMiddleware />}>
      <Route path="" element={<Orders />} />
    </Route>
  </>
);
