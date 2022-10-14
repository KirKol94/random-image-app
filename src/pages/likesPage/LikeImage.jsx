import { Link } from 'react-router-dom';
import useLikeImage from './useLikeImage';

export default function LikeImage() {
  const { url, keyword, removeFromLikes } = useLikeImage();

  return (
    <main>
      <section className="container mx-auto py-5">
        <Link to="/likes">
          <img
            className="w-full py-3"
            src={url}
            alt={keyword}
          />
        </Link>

        <button
          className="w-full text-white bg-gray-800 py-3"
          type="button"
          onClick={removeFromLikes}
        >
          Remove image
        </button>
      </section>
    </main>
  );
}
