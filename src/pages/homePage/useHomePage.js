import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getFavoritePhotos } from '../../selectors/faroritePhotosSelector';
import { addImageToLikesAC } from '../../store/reducers/likesReducer';

export default function useHomePage() {
  const dispatch = useDispatch();

  const [imgParams, setImgParams] = useState({
    width: '', height: '', keyword: '', isLike: false, url: '',
  });
  const [reqCount, setReqCount] = useState(0);
  const [urlOnSave, setUrlOnSave] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const baseURL = 'https://source.unsplash.com/random';
  const {
    width, height, keyword, url,
  } = imgParams;
  const likes = useSelector(getFavoritePhotos);

  function reqImgUrl(w, h, k) {
    setIsLoading(true);
    setIsSaved(true);
    setIsLiked(false);

    axios.get(`${baseURL}/${w}x${h}?${k}`)
      .then((res) => {
        setImgParams({ ...imgParams, url: res.request.responseURL });
        setIsSaved(false);
        setIsLoading(false);
      });
  }

  function onChangeInput(e) {
    const { name, value } = e.target;
    setImgParams({ ...imgParams, [name]: value });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
  }

  function addToLikes() {
    const id = new Date().getTime();
    // проверка на одинаковые ссылки
    if (likes.filter((l) => l.url === imgParams.url).length === 0) {
      dispatch(addImageToLikesAC({ ...imgParams, id }));
      setIsLiked(true);
    }
  }

  function downloadImage() {
    fetch(url)
      .then((res) => res.blob())
      .then((res) => {
        setUrlOnSave(URL.createObjectURL(res));
      });
  }

  useEffect(() => {
    reqImgUrl(width, height, keyword);
  }, [reqCount]);

  useEffect(() => {
    downloadImage();
  }, [imgParams.url]);

  return {
    setReqCount,
    urlOnSave,
    isLoading,
    setIsSaved,
    isSaved,
    isLiked,
    width,
    height,
    keyword,
    url,
    onChangeInput,
    onSubmitHandler,
    addToLikes,
  };
}
