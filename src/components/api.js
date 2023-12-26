import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '39286260-36ff99979e0a23a42f4451b46';

export const fetchImages = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};

export const sortedImages = array =>
  array.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });