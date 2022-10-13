import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { likesSelector } from '../../store/selectors';
import { removeImageFromLikesAC } from '../../store/reducers/likesReducer';

export default function LikeImage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const likes = useSelector(likesSelector);

  const { url, keyword } = likes.filter((l) => l.id === +id)[0];

  function removeFromLikes(id) {
    dispatch(removeImageFromLikesAC(+id));
    navigate('/likes');
  }

  return (
    <main>
      <section className="container mx-auto py-5">
        <img className="w-full py-3" src={url} alt={keyword} />

        <button
          className="w-full text-white bg-gray-800 py-3"
          type="button"
          onClick={() => removeFromLikes(id)}
        >
          Удалить
        </button>
      </section>
    </main>
  );
}
