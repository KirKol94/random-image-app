import { Route, Routes } from 'react-router-dom';
import { path } from '../../const/links';
import Layout from '../layout/Layout';
import HomePage from '../../pages/homePage/HomePage';
import LikesPage from '../../pages/likesPage/LikesPage';
import LikeImage from '../../pages/likesPage/LikeImage';
import NotFoundPage from '../../pages/notFound/NotFoundPage';

export default function MyRoutes() {
  return (
    <Routes>
      <Route path={path.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={path.likes} element={<LikesPage />} />
        <Route path={`${path.likes}/:id`} element={<LikeImage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

  );
}
