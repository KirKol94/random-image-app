import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFavoritePhotos } from '../../selectors/faroritePhotosSelector';

export default function LikesPage() {
  const likes = useSelector(getFavoritePhotos);

  return (
    <main>
      <section className="container mx-auto">
        <div className="my-3 grid grid-cols-3 gap-3 items-center">
          {!likes.length && <h1 className="text-2xl">Page is empty :(</h1>}
          {likes.length > 0 && likes.map(({ url, keyword, id }) => (
            <Link to={`/likes/${id}`} key={id}>
              <img
                src={url}
                alt={keyword}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
