import useHomePage from './useHomePage';

export default function HomePage() {
  const {
    setReqCount,
    urlOnSave,
    setIsSaved,
    isLoading,
    isSaved,
    isLiked,
    width,
    height,
    keyword,
    url,
    onChangeInput,
    onSubmitHandler,
    addToLikes,
  } = useHomePage();

  return (
    <main>
      <section className="container mx-auto py-3">
        <h1 className="text-2xl">Get random image. Double click add to like list</h1>
        <form onSubmit={onSubmitHandler} className="w-full my-3 space-y-2 rounded-md">
          <input
            className="w-full p-3 border-2 border-gray-800 rounded-md"
            type="number"
            inputMode="numeric"
            pattern=""
            name="width"
            placeholder="width"
            value={width}
            onChange={onChangeInput}
          />
          <input
            className="w-full p-3 border-2 border-gray-800 rounded-md"
            type="number"
            inputMode="numeric"
            name="height"
            placeholder="height"
            value={height}
            onChange={onChangeInput}
          />
          <input
            className="w-full p-3 border-2 border-gray-800 rounded-md"
            type="text"
            inputMode="search"
            name="keyword"
            placeholder="search image"
            value={keyword}
            onChange={onChangeInput}
          />
          <button
            className="w-full p-3 rounded-md text-white bg-gray-800 disabled:bg-gray-300 disabled:cursor-progress"
            type="button"
            disabled={isLoading}
            onClick={() => setReqCount((reqCount) => reqCount + 1)}
          >
            Update image
          </button>
        </form>

        <div className="relative">
          <img src={url} alt={keyword} className="block mx-auto" onDoubleClick={addToLikes} />
          {isLiked
            && <span className="text-[3em] animate-ping absolute top-10 left-1/2 -translate-x-1/2 select-none">♥︎</span>}
        </div>

        <a
          className={!isSaved ? 'mt-3 block text-center p-3 rounded-md bg-gray-800 text-white' : 'hidden'}
          href={urlOnSave}
          download={`${keyword}.jpeg`}
          onClick={() => setIsSaved(true)}
        >
          download image
        </a>
      </section>
    </main>
  );
}
