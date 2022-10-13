import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postsSelector } from '../../store/selectors';
import { removePostAC } from '../../store/reducers/postsReducer';

// eslint-disable-next-line react/prop-types
export default function Post() {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  // получаем id из параметра
  const id = +param.id;

  // забираем массив постов
  const posts = useSelector(postsSelector);
  // достаём заголовок и текст из 0  элемента, отфильтрованного по id массива
  const { title, text } = posts.filter((p) => p.id === id)[0];

  function onRemovePost() {
    dispatch(removePostAC(id));
    navigate('/posts');
  }

  return (
    <article className="container mx-auto py-3">
      <h1 className="text-2xl font-bold">{title || 'Не найдено'}</h1>
      <pre className="whitespace-pre-wrap">{text || 'Не найдено'}</pre>
      <button
        type="button"
        onClick={onRemovePost}
      >
        Удалить запись
      </button>
    </article>
  );
}
