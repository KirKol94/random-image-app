import { useEffect, useState } from 'react';

export default function HomePage() {
  const [imgSrc, setImgSrc] = useState('');
  const [imgParams, setImgParams] = useState({ width: '', height: '', keyword: '' });
  const [requestCount, setRequestCount] = useState(0);

  const baseImg = 'https://source.unsplash.com/random/1000x400?landscape';
  const { width, height, keyword } = imgParams;

  function requestImage(w, h, k) {
    setImgSrc(`https://source.unsplash.com/random/${w}x${h}?${k}`);
  }
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setImgParams({ ...imgParams, [name]: value });
  }
  function onSubmitHandler(e) {
    e.preventDefault();
    requestImage(width, height, keyword);
    setRequestCount((requestCount) => requestCount + 1);
  }
  function updateCurrentRequest() {
    setRequestCount((requestCount) => requestCount + 1);
  }

  useEffect(() => {
    fetch(baseImg)
      .then((res) => setImgSrc(res.url));
    setRequestCount((requestCount) => requestCount + 1);
  }, []);
  useEffect(() => {
    fetch(imgSrc)
      .then((res) => setImgSrc(res.url));
  }, [requestCount]);

  return (
    <main>
      <section className="container mx-auto py-3">
        <h1 className="text-2xl">Get random image</h1>
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
            onClick={requestCount !== 0 ? updateCurrentRequest : onSubmitHandler}
          >
            Update image
          </button>
        </form>
        <img src={imgSrc} alt={keyword} className="w-full" />
      </section>
    </main>
  );
}
