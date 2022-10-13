import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { likesSelector } from '../../store/selectors';

export default function LikesPage() {
  const likes = useSelector(likesSelector);

  return (
    <main>
      <section className="container mx-auto">
        <div className="my-3 grid grid-cols-3 gap-3 items-center">
          {likes?.map(({ url, keyword, id }) => (
            <Link to={`/likes/${id}`} key={id}>
              <img
                src={url}
                alt={keyword}
                className="w-full"
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
