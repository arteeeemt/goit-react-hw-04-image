import { ModalStyle, Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
import PropTypes from 'prop-types'
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

  
export const Modal = ({ selectedPhoto: { largeImageURL, tags }, onClose }) => {
    useEffect(() => {
        window.addEventListener('keydown', onEscapeCloseModal);
        return () => {
            window.removeEventListener('keydown', onEscapeCloseModal);
        };
    }, [onEscapeCloseModal]);
    
    function onEscapeCloseModal(event) {
        if (event.code === 'Escape') {
            onClose();
        };
    };

    const onClickOverlay = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        };
    };
    
    return createPortal(
        <Overlay onClick={onClickOverlay}>
            <ModalStyle>
                <img src={largeImageURL} alt={tags} />
            </ModalStyle>
        </Overlay>,
        modalRoot);
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    selectedPhoto: PropTypes.shape({
        id: PropTypes.number.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
};

// export class Modal extends Component {

//     static propTypes = {
//         onClose: PropTypes.func.isRequired,
//         selectedPhoto: PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             largeImageURL: PropTypes.string.isRequired,
//             webformatURL: PropTypes.string.isRequired,
//             tags: PropTypes.string.isRequired,
//         }).isRequired,
//     }

//     componentDidMount = () => {
//         window.addEventListener('keydown', this.onEscapeCloseModal);
//     }

//     componentWillUnmount = () => {
//         window.removeEventListener('keydown', this.onEscapeCloseModal);
//     }
    
//     onEscapeCloseModal = (event) => {
//         if (event.code === 'Escape') {
//             this.props.onClose()
//         }
//     }

//     onClickOverlay = (event) => {
//         if (event.target === event.currentTarget) {
//             this.props.onClose()
//         };
//     }

//     render() {
//         const { selectedPhoto: {largeImageURL, tags} } = this.props;

//         return createPortal(
//             <Overlay onClick={this.onClickOverlay}>
//                 <ModalStyle>
//                     <img src={largeImageURL} alt={tags} />
//                 </ModalStyle>
//             </Overlay>,
//             modalRoot);
//     }
// };