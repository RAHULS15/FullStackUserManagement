import React from 'react';

export default function ConfirmDeleteDialog({ message, onConfirm, onCancel }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      justifyContent: "center", alignItems: "center",
    }}>
      <div style={{ background: "white", padding: 20, borderRadius: 5, width: 300, textAlign: "center" }}>
        <p>{message}</p>
        <button onClick={onConfirm} style={{ marginRight: 10, background: 'red', color: 'white' }}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </div>
  );
}