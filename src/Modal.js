import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css'; 

const Modal = ({ src, alt, onClose }) => {
  const handleModalClick = (e) => {

    if (!e.currentTarget.contains(e.target)) {
      onClose();
    }
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
   
    <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal-content" onClick={handleModalClick}>
            <img src={src} alt={alt} width='auto' height='500'/>
        </div>
    
    </div>

  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
