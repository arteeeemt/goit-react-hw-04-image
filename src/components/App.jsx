import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Container } from './App.styled';
import { fetchImages, sortedImages } from './api.js';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import { SearchBar } from './Searchbar/Searchbar';

export const App = () => {
  const [imgItems, setImgItems] = useState([]);
  const [searchItems, setSearchItems] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = query => {
    if (searchItems === query && searchItems !== '') {
      return toast.error(`You are already browsing ${query}`);
    }
    setSearchItems(query);
    setImgItems([]);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!searchItems) {
      return;
    }
    async function renderImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(searchItems, currentPage);
        if (data.hits.length === 0) {
          return toast.error('Sorry image not found!');
        }
        const normalizedImg = sortedImages(data.hits);
        setImgItems(prevImgItems => [...prevImgItems, ...normalizedImg]);
        setIsLoading(false);
        setTotalPages(Math.ceil(data.hits / 12));
      } catch {
        toast.error('Something went wrong!');
      } finally {
        setIsLoading(false);
      }
    }
    renderImages();
  }, [searchItems, currentPage]);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {imgItems.length > 0 ? (
        <ImageGallery images={imgItems} />
      ) : (
        <p
          style={{
            padding: 10,
            textAlign: 'center',
            fontSize: 32,
          }}
        >
          Gallery is empty
        </p>
      )}
      {isLoading && <Loader />}
      {imgItems.length > 0 && totalPages !== currentPage && !isLoading && (
        <Button onClick={loadMore} />
      )}
      <Toaster position="top-right" />
    </Container>
  );
};