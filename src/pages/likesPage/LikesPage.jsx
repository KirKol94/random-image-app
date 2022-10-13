import { useSelector } from 'react-redux';
import { likesSelector } from '../../store/selectors';

export default function LikesPage() {
  const likes = useSelector(likesSelector);
  console.log(likes);

  return (
    <main>
      <section className="container mx-auto">
        <h1 className="mt-3 text-2xl">Like images</h1>
        <div className="flex flex-col space-y-2">
          {likes?.map(({ url, keyword, id }) => (
            <img key={id} src={url} alt={keyword} className="w-full" />
          ))}
        </div>
      </section>
    </main>
  );
}
