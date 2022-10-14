import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { likesSelector } from '../../store/selectors';
import { removeImageFromLikesAC } from '../../store/reducers/likesReducer';

export default function useLikeImage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const likes = useSelector(likesSelector);

  const { url, keyword } = likes.filter((l) => l.id === +id)[0];

  function removeFromLikes() {
    dispatch(removeImageFromLikesAC(+id));
    navigate('/likes');
  }

  return { url, keyword, removeFromLikes };
}
