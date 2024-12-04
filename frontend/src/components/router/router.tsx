import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import App from "../App/App";
import Main from "../../geoChecker/pages/Main/Main";
import NotFound from "../../geoChecker/pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default router;
