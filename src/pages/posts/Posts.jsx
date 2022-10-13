import React from 'react';
import { NavLink } from 'react-router-dom';
import usePosts from '../../hook/usePosts';

export default function Posts() {
  const {
    post, posts, onChangeHandler, onSubmitHandler,
  } = usePosts();

  return (
    <>
      <form
        className="container w-full my-3 p-3 mx-auto border-2 rounded-md space-y-3"
        onSubmit={onSubmitHandler}
      >
        <input
          className="p-3 w-full rounded-md"
          name="title"
          type="text"
          value={post.title}
          placeholder="Введите текст"
          onChange={onChangeHandler}
        />
        <textarea
          className="p-3 w-full rounded-md"
          name="text"
          value={post.text}
          placeholder="Введите текст"
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="py-2 w-full"
        >
          Добавить
        </button>
      </form>
      <hr />
      <section>
        <div className="container mx-auto">
          {posts?.map(({ id, title }) => (
            <div
              key={id}
              className="p-3"
            >
              <NavLink
                to={`/posts/${id}`}
                className="block p-3 whitespace-pre-wrap hover:bg-gray-400"
              >
                {title}
              </NavLink>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
