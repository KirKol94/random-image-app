import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addImageToLikesAC } from '../../store/reducers/likesReducer';

export default function HomePage() {
  const dispatch = useDispatch();

  const [imgParams, setImgParams] = useState({
    width: 1000, height: 400, keyword: 'landscape', isLike: false, url: '',
  });
  const [reqCount, setReqCount] = useState(0);

  const baseURL = 'https://source.unsplash.com/random';
  const {
    width, height, keyword, url,
  } = imgParams;

  function addReqCount() {
    setReqCount((reqCount) => reqCount + 1);
  }

  function reqImgUrl(w, h, k) {
    axios.get(`${baseURL}/${w}x${h}?${k}`)
      .then((res) => setImgParams({ ...imgParams, url: res.request.responseURL }));
  }

  function onChangeHandler(e) {
    const { name, value } = e.target;
    setImgParams({ ...imgParams, [name]: value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    reqImgUrl(width, height, keyword);
  }

  function addToLikes() {
    const id = new Date().getTime();
    dispatch(addImageToLikesAC({ ...imgParams, id }));
  }

  useEffect(() => {
    reqImgUrl(width, height, keyword);
  }, [reqCount]);

  return (
    <main>
      <section className="container mx-auto py-3">
        <h1 className="text-2xl">Get random image. Double click add to like list</h1>
        <form onSubmit={onSubmitHandler} className="w-full my-3 space-y-2 rounded-md">
          <input
            className="w-full p-3 rounded-md"
            type="number"
            inputMode="numeric"
            name="width"
            placeholder="width"
            max={2048}
            value={width}
            onChange={onChangeHandler}
          />
          <input
            className="w-full p-3 rounded-md"
            type="number"
            inputMode="numeric"
            name="height"
            placeholder="height"
            max={2048}
            value={height}
            onChange={onChangeHandler}
          />
          <input
            className="w-full p-3 rounded-md"
            type="text"
            inputMode="search"
            name="keyword"
            placeholder="search image"
            value={keyword}
            onChange={onChangeHandler}
          />
          <button
            className="w-full p-3 rounded-md text-white bg-gray-800"
            type="submit"
            onClick={addReqCount}
          >
            Update image
          </button>
        </form>

        <img
          src={url}
          alt={keyword}
          className="w-full"
          onDoubleClick={addToLikes}
        />
      </section>
    </main>
  );
}
