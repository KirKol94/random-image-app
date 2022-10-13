import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postsSelector } from '../store/selectors';
import { addPostAC } from '../store/reducers/postsReducer';

export default function usePosts() {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);
  const [post, setPost] = useState({ title: '', text: '', id: null });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    const id = new Date().getTime();
    setPost({ ...post, [name]: value, id });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (post.title.trim().length) {
      dispatch(addPostAC(post));
      setPost({ title: '', text: '', id: null });
    }
  };

  return {
    post, posts, onChangeHandler, onSubmitHandler,
  };
}
