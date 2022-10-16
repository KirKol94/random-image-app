import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getFavoritePhotos } from '../../selectors/faroritePhotosSelector';
import { removeImageFromLikesAC } from '../../store/reducers/likesReducer';
import { path } from '../../const/links';

export default function useLikeImage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const likes = useSelector(getFavoritePhotos);

  const { url, keyword } = likes.filter((l) => l.id === +id)[0];

  function removeFromLikes() {
    dispatch(removeImageFromLikesAC(+id));
    navigate(`/${path.likes}`);
  }

  return { url, keyword, removeFromLikes };
}
