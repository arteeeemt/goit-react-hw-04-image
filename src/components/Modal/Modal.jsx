import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: '1200',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    overflow: 'aria-hidden',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
export const ModalWindow = ({ isOpen, onClose, largeImageURL, tags }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image"
    >
      <img src={largeImageURL} alt={tags} />
    </Modal>
  );
};