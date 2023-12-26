import { useState } from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
import { ModalWindow } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, largeImageURL },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <GalleryItem>
        <GalleryImg src={webformatURL} alt={tags} onClick={openModal} />

        <ModalWindow
          isOpen={isModalOpen}
          largeImageURL={largeImageURL}
          tags={tags}
          onClose={closeModal}
        />
      </GalleryItem>
    </>
  );
};