import React from 'react';
import './ConfirmModal.css'; 

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirm Logout</h2>
        <p>Do you want to log out?</p>
        <div className="modal-actions">
          <button onClick={onConfirm} className="confirm-btn">Yes</button>
          <button onClick={onClose} className="cancel-btn">No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
