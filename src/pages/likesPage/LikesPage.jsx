import { useDispatch, useSelector } from 'react-redux';
import { likesSelector } from '../../store/selectors';
import { removeImageFromLikesAC } from '../../store/reducers/likesReducer';

export default function LikesPage() {
  const dispatch = useDispatch();
  const likes = useSelector(likesSelector);

  function removeFromLikes(id) {
    dispatch(removeImageFromLikesAC(id));
  }

  return (
    <main>
      <section className="container mx-auto">
        <h1 className="mt-3 text-2xl">Like images. Double click remove from like list</h1>
        <div className="my-3 flex flex-col space-y-2">
          {likes?.map(({ url, keyword, id }) => (
            <img
              key={id}
              src={url}
              alt={keyword}
              className="w-full"
              onDoubleClick={() => removeFromLikes(id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
