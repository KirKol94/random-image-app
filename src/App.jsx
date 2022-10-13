import { Route, Routes } from 'react-router-dom';
import Posts from './pages/posts/Posts';
import NotFoundPage from './pages/notFound/NotFoundPage';
import Post from './pages/post/Post';
import Layout from './components/layout/Layout';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
