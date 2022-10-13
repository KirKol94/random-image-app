import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/notFound/NotFoundPage';
import Layout from './components/layout/Layout';
import HomePage from './pages/homePage/HomePage';
import LikesPage from './pages/likesPage/LikesPage';
import LikeImage from './pages/likesPage/LikeImage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="likes" element={<LikesPage />} />
        <Route path="likes/:id" element={<LikeImage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
