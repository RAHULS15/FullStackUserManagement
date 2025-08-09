import React from 'react';

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Confirm</h3>
        <p>{message}</p>
        <div className="form-buttons">
          <button className="btn-delete" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}